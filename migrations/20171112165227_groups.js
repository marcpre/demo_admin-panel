exports.up = function(knex, Promise) {
  return knex.schema.createTable("groups", function (t) {
      t.increments("id").unsigned().primary()
      t.integer('user_id').references('id').inTable('users').notNull().onDelete('cascade')         
      t.enu('groups', ['admin', 'user'])
      t.boolean("deleted").nullable()       
      t.dateTime("createdAt").notNull()
      t.dateTime("updatedAt").nullable()
      t.dateTime("deletedAt").nullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("groups")        
}
