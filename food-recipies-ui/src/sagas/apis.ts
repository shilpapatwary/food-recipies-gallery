
const contentful = require('contentful');

const client = contentful.createClient({
  space: 'kk2bw5ojx476',
  environment: 'master', 
  accessToken: '7ac531648a1b5e1dab6c18b0979f822a5aad0fe5f1109829b8a197eb2be4b84c'
})
const entryConfig = {
  content_type: 'recipe',
  select: 'sys.id,fields.title,fields.photo,fields.tags,fields.description,fields.chef'
};
export async function getRecipesContent() {
     const response = await client.getEntries(entryConfig);
     const body = await response;
     if (response.errors) throw Error('error');
     return {
         recipes: body.items,
         assets: body.includes.Asset,
         entries: body.includes.Entry
     };
}

export async function getRecipeContent(id: String) {
  const response = await client.getEntry(id, entryConfig);
  const body = await response;
  if (response.errors) throw Error('error');
  return body;
}