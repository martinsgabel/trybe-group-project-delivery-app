module.exports = (seq, dt) => {
  const Product = seq.define('Product', {
    id: {
      type: dt.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: dt.STRING,
    },
    email: {
      type: dt.STRING,
      unique: true,
    },
    password: {
      type: dt.STRING,
    },
    role: {
      type: dt.STRING,
    },
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, { foreignKey: 'product_id' });
  };

  return Product;
}