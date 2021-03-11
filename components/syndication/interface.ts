export type Product = {
  _id: string,
  createdAt: string,
  totalValue: number
}

export type ProductTabProps = {
  item: Product,
  isSelected?: boolean,
  onClick?: Function
}

export type SidebarProps = {
  products: Product[],
  selectedProduct: string | null,
  onProductSelect?: Function,
  loading: boolean,
}

export type ProductTabStyle = {
  selected?: boolean
}

export type Purchase = {
  inverstor: string,
  sold: number,
  purchased: number,
  editable?: boolean,
}

export type PurchaseItemProps = {
  item: Purchase
}

export type PurchaseActionProps = {
  secondary?: boolean
}

export type DescriptionProps = {
  productId?: string | null,
  fullProduct?: Product,
  items?: Purchase[],
  loading?: boolean,
}

export type ProgressTabProps = {
  remainding?: number,
  totalValue?: number
}
