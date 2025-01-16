import { expect, test } from '@playwright/test'

test('Update profile sucessfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('pizzamock')
  await page.getByLabel('Descrição').fill('Bla Bla Bla Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')
  const toast = page.getByText('Perfil atualizado com sucesso!')
  expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Cancelar' }).click()

  expect(page.getByRole('button', { name: 'pizzamock' })).toBeVisible()
})

test('Update profile with wrong credentials', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('wrong name')
  await page.getByLabel('Descrição').fill('Bla Bla  Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Cancelar' }).click()

  await expect(page.getByRole('button', { name: 'Pizza Shop' })).toBeVisible()

  await page.waitForTimeout(2000)
})
