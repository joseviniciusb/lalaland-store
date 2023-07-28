import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/products', ()=> {
    const products = [
        {
          marca: 'Lumiss',
          especificacoes: 'Bota masculina Adventure',
          preco: '120,00'
        },
        {
          marca: 'Nike',
          especificacoes: 'Calças de Moletom Camisa masculina Nsw Club Jogger',
          preco: '300,00'
        },
        {
          marca: 'Oakley',
          especificacoes: 'Jaqueta Windbreaker Unissex',
          preco: '350,00'
        },
        {
          marca: 'Vicbela',
          especificacoes: 'Calça Jogger Feminina',
          preco: '350,00'
        }
      ]
      
    return products
} )