function superbowlWin(record) {
  const winRecord = record.find(entry => entry.result === "W");
  return winRecord ? winRecord.year : undefined;
}




