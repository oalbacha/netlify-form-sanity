const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'hvm9y6xi',
  dataset: 'production',
  token: process.env.SANITY_TOKEN
})

exports.handler = async function (event, context, callback) {
  const { payload } = JSON.parse(event.body)
  const result = await client.create({ _type: 'submission.form', ...payload })
  callback(null, {
    statusCode: 200
  })
}
