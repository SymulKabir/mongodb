const mongoose = require("mongoose");

const transferMoney = async (senderId, receiverId, amount) => {
  const session = await mongoose.startSession();
  try {
    let result;
    await session.withTransaction(async () => {
      const Sender = mongoose.model("Account");
      const Receiver = mongoose.model("Account");
      const sender = await Sender.findById(senderId).session(session);
      if (!sender) throw new Error("sender not found");
      if (sender.balance < amount) throw new Error("insufficient funds");
      sender.balance -= amount;
      await sender.save({ session });
      const receiver = await Receiver.findById(receiverId).session(session);
      if (!receiver) throw new Error("receiver not found");
      receiver.balance += amount;
      await receiver.save({ session });
      const Transfer = mongoose.model("Transfer");
      await Transfer.create([{ sender: senderId, receiver: receiverId, amount, createdAt: new Date() }], { session });
      result = { success: true };
    });
    return result;
  } catch (err) {
    return { success: false, error: err.message };
  } finally {
    session.endSession();
  }
};

module.exports = { transferMoney };
