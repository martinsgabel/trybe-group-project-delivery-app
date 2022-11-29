module.exports = (seq, dt) => {
  const User = seq.define('User', {
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
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'user_id' });
    User.hasMany(models.Sale, { foreignKey: 'seller_id' });
  };

  return User;
}
