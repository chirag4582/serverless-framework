const {v4}  = require('uuid')

const AddTodo = async (event) => {

  const { todo } = JSON.parse(event.body)
  const createdAt = new Date()
  const id = v4();


  const dynamo = AWS.DynamoDB.DocumentClient()

  await dynamo.put({
    TableName:'TodoTable',
    Item:newTodo
  })

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
       newTodo
      },
      null,
      2
    ),
  };
};


module.exports = {
  handler: AddTodo
}