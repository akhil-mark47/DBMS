export const staticProducts = [
  {
    id: 1,
    name: "Premium Laptop",
    price: 999.99,
    description: "High-performance laptop for professionals",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
    stock: 15,
    sold: 45
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 199.99,
    description: "Noise-canceling bluetooth headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    stock: 25,
    sold: 120
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    stock: 20,
    sold: 75
  }
];

export const staticOrders = [
  {
    id: "ORD-001",
    date: "2024-02-15",
    total: 1199.98,
    status: "Delivered",
    items: [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 1 }
    ]
  },
  {
    id: "ORD-002",
    date: "2024-02-14",
    total: 299.99,
    status: "Processing",
    items: [
      { productId: 3, quantity: 1 }
    ]
  }
];

export const staticSalesData = {
  totalSales: 25999.99,
  dailySales: 1499.99,
  monthlySales: 12999.99,
  totalOrders: 240,
  averageOrderValue: 108.33,
  salesByMonth: [
    { month: "Jan", sales: 10500 },
    { month: "Feb", sales: 12999.99 }
  ],
  topProducts: [
    { id: 2, name: "Wireless Headphones", sales: 120, revenue: 23998.80 },
    { id: 3, name: "Smart Watch", sales: 75, revenue: 22499.25 },
    { id: 1, name: "Premium Laptop", sales: 45, revenue: 44999.55 }
  ],
  lowStockAlert: 20
};

export const users = [
  { 
    id: 1, 
    name: "Manager", 
    email: "manager@example.com", 
    password: "password123", 
    role: "manager" 
  },
  { 
    id: 2, 
    name: "Citizen", 
    email: "citizen@example.com", 
    password: "password123", 
    role: "citizen" 
  }
];