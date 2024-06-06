export async function GET() {
  console.log('tes');
  
  interface User {
    "hihi": string
  }
  let user: User = {
    'hihi': 'hoho'
  }
  return Response.json(user)
}