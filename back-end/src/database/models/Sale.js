module.exports = (seq, dt) => {
  const Sale = seq.define('Sale', {
    id: {
      type: dt.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: dt.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    seller_id: {
      type: dt.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    total_price: {
      type: dt.DECIMAL(9, 2),
      allowNull: false,
    },
    delivery_address: {
      type: dt.STRING(100),
      allowNull: false,
    },
    delivery_number: {
      type: dt.STRING(50),
      allowNull: false,
    },
    sale_date: {
      type: dt.DATE,
      allowNull: false,
    },
    status: {
      type: dt.STRING(50),
      allowNull: false,
    },
  }, {
    tableName: 'sales',
    timestamps: false,
    underscored: true,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller' });

    Sale.hasMany(models.SaleProduct, { foreignKey: 'salesProducts' });
  };

  return Sale;
}