"""DaisyDocReact data models."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class System(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    daisy_docs_url = db.Column(db.String(100), unique=True, nullable=False)

    @staticmethod
    def get_system_info():
        """Returns the system info. Acts as a singleton row."""
        settings = System.query.first()

        if settings is None:
            settings = System(daisy_docs_url='https://daisyui.com/')
            db.session.add(settings)
            db.session.commit()

        return settings
    
    @staticmethod
    def set_docs_url(new_url):
        """Sets the docs url and commits it to the database."""
        settings = System.get_system_info()
        settings.daisy_docs_url = new_url
        db.session.commit()


class ManifestComponent(db.Model):
    """Component listing scraped from daisyUI docs. Serves as a guide for 
    scraping for each component."""
    __tablename__ = 'component_manifest'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), unique=True, nullable=False)
    url = db.Column(db.String(100), nullable=False)
    component_group = db.Column(db.String(20), nullable=False)


class ScrapedComponent(db.Model):
    """Metadata and generated code for a given daisyUI component."""
    __tablename__ = 'scraped_components'

    # Base fields gathered and processed from scraping
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    description = db.Column(db.Text, nullable=True)
    classname = db.Column(db.String(80), nullable=True)
    auxillary_components = db.Column(db.Text, nullable=True)
    ts_prop_interface = db.Column(db.Text, nullable=True)
    prop_interface_classname_mappings = db.Column(db.Text, nullable=True)
    usage_examples = db.Column(db.Text, nullable=True)

    # Final generated code
    components = db.Column(db.Text, nullable=True)
    stories = db.Column(db.Text, nullable=True)
    tests = db.Column(db.Text, nullable=True)
    utils = db.Column(db.Text, nullable=True)
    types = db.Column(db.Text, nullable=True)

