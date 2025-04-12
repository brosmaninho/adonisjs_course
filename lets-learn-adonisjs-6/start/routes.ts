/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router
  .get('/movies', (ctx) => {
    return ctx.view.render('pages/movies', { movie: 'Tron: Legacy' })
  })
  .as('movies.index')
router.get('/movies/my-movie', () => {}).as('movies.show')
router.get('/movies/create', () => {}).as('movies.create')
router.get('/movies/my-movie/edit', () => {}).as('movies.edit')
router.post('/movies', () => {}).as('movies.store')
router.put('/movies/my-movie', () => {}).as('movies.update')
router.delete('/movies/my-movie', () => {}).as('movies.destroy')
