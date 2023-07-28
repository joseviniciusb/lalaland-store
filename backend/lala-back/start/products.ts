import Route from '@ioc:Adonis/Core/Route'

Route.get('/api/products', ()=> {
    const products = [{
        name: 'tenis',
        brand: 'Nike',
        price: '25.70'
    }]
    return products
} )