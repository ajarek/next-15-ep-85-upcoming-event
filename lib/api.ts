// Definicja typów dla produktów
export type Product = {
  id: number
  title: string
  description?: string
  price: number
  discountPercentage: number
  rating?: number
  stock: number
  brand?: string
  category?: string
  thumbnail: string
  images?: string[]
}

export type ProductsResponse = {
  map(
    arg0: (product: Product) => import('react').JSX.Element
  ): import('react').ReactNode
  products: Product[]
  total: number
  skip: number
  limit: number
}

// Funkcja do pobierania wszystkich produktów
export async function fetchProducts(
  limit: number = 10,
  skip: number = 0
): Promise<ProductsResponse> {
  try {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
      { next: { revalidate: 3600 } } // Odświeżanie cache co godzinę
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

// Funkcja do pobierania pojedynczego produktu
export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`, {
      next: { revalidate: 3600 },
    })

    if (!response.ok) {
      throw new Error(
        `Failed to fetch product with id ${id}: ${response.status}`
      )
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error)
    throw error
  }
}

// Funkcja do pobierania produktów według kategorii
export async function fetchProductsByCategory(
  category: string
): Promise<ProductsResponse> {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      throw new Error(
        `Failed to fetch products in category ${category}: ${response.status}`
      )
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error)
    throw error
  }
}

// Funkcja do wyszukiwania produktów
export async function searchProducts(query: string): Promise<ProductsResponse> {
  try {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
      { next: { revalidate: 3600 } }
    )

    if (!response.ok) {
      throw new Error(
        `Failed to search products with query ${query}: ${response.status}`
      )
    }

    return await response.json()
  } catch (error) {
    console.error(`Error searching products with query ${query}:`, error)
    throw error
  }
}
