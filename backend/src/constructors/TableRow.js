
export default function TableRow(description) {
  // this.sequenceNumber = description.sequenceNumber
  let now = new Date()
  this.systemName = description.systemName
  this.aim = description.aim
  this.createdAt = now
  this.lastOccurrence = now
}