import TableRow from "../constructors/TableRow.js"
import User from '../models/User.js'

export const create = async (req, res) => {
  try {

    const user = await User.findById(req.UserId)
    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден'
      }) 
    }

    const finSystems = user.TableRows 
    const finSystemPage = user.FinancialSystems // ************************************************ fill up it

    const systemName = req.body.systemName
    const aim = req.body.aim
    
    finSystems.push(new TableRow({
      aim,
      systemName,
    }))

    await User.updateOne(
      {
        _id: user._id
      },
      {
      TableRows: finSystems,
      }
    )

    // добавить что-то в финансовую систему

    res.json(user)




  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'не удалось создать новую систему'
    })
  }
}

export const remove = async (req, res) => {
try {

  
  const indexTable = Number(req.params.indexTable.replace(':', ''))


  const user = await User.findOne({ _id: req.UserId})

  if (!user) {
    return res.status(404).json({
      message: 'Пользователь не найден'
    }) 
  }


  const finSystems = user.TableRows
  if (!finSystems[0])
    return res.status(500).json({
      massage: "не опознанная ошибка №1"
    })
	//	console.log(finSystems, sequenceNumber - 1);
  if (indexTable >= user.TableRows.length || indexTable < 0){
		res.status(404).json({
			message: 'не удалось удалить систему'
		})
	}
  finSystems.splice(indexTable, 1)

  await User.updateOne(
    {
      _id: user._id
    },
    {
    TableRows: finSystems,
    }
  )

  res.json(user)


} catch (err) {
  console.log(err)
  res.status(500).json({
    message: 'не удалось удалить систему'
  })
}
}

export const update = async (req, res) => {
  try {
    const user = await User.findById(req.UserId)

  if (!user) {
    return res.status(404).json({
      message: 'Пользователь не найден'
    }) 
  }
  const indexTable = Number(req.params.indexTable.replace(':', ''))
  
	const finSystems = user.TableRows

  const systemName = req.body.systemName
  const aim = req.body.aim
  
  const updatedSystem = {
    aim,
    systemName,
  }



  finSystems.splice(sequenceNumber - 1, sequenceNumber - 1 , updatedSystem)
  
  await User.updateOne(
    {
      _id: user._id
    },
    {
    TableRows: finSystems,
    }
  )
  res.json(user)
  
  } catch (err) {
    console.log(err)
    res.status(500).json({
      message: 'не удалось обнавить систему'
    })
  }

  
}
