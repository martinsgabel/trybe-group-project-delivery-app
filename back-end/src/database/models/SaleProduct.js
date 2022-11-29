module.exports = (seq, dt) => {
  const SaleProduct = seq.define('SaleProduct', {
    sale_id: {
      type: dt.INTEGER,
      allowNull: false,
      references: {
        model: 'sales',
        key: 'id',
      },
    },
    product_id: {
      type: dt.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id',
      },
    },
    quantity: {
      type: dt.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'salesProducts',
    timestamps: false,
    underscored: true,
  });

  SaleProduct.associate = (models) => {
    SaleProduct.belongsTo(models.Sale, { foreignKey: 'sale_id', as: 'sale' });
    SaleProduct.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
  };

  return SaleProduct;
}