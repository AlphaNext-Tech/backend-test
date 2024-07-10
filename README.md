# Competitor Analysis API

## Setup Instructions

1. Clone the repository.
2. Create and activate a virtual environment.
   - cd to project directory
   - Then in the terminal type `python -m venv venv`
   - Activate the venv for window `venv\Scripts\activate`
   - Activate the venv for mac `source venv/bin/activate`
3. Install dependencies using `pip install -r requirements.txt`.
4. Initialize Migrations `flask db init`
5. Generate Migration Script `flask db migrate -m "Initial migration."`
6. Apply Migration `flask db upgrade`
7. Run the application using `python run.py or flask run`.

## Short description on the dependencies used

- FLASK_MIGRATE: "Integrates Flask with Alembic for handling database migrations, making schema changes manageable."
- FLASK_SQLALCHEMY: "Adds SQLAlchemy support to Flask, used for ORM (Object Relational Mapping) to interact with the database."
- SQLALCHEMY: "The SQL toolkit and ORM used for interacting with the database."

## Unit Tests

- python -m unittest discover -s tests

## API Documentation

The API has the following endpoints:

### Create a Competitor Profile

- **URL:** `/competitor-profile`
- **Method:** `POST`
- **Request Body:**

  ```json example
  {
      "business_name": "Competitor A",
      "business_type": "Type A",
      "location": "Location A",
      "website_traffic": 1000,
      "top_performing_pages": "Page A, Page B"
  }

### Fetch a single competitor profile

- **URL:** `/competitor/<int:id>`
- **Method:** `GET`
- **Request Body:**
