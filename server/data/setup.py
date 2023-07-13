def setup_db(app, db):
  app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite3'
  db.init_app(app)

  with app.app_context():
      db.create_all()
