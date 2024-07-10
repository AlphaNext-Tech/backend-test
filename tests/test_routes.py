import unittest
from app import create_app, db  # Ensure db is imported from app

class CompetitorTestCase(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_create_competitor(self):
        response = self.client.post('/competitor-profile', json={
            "business_name": "Competitor A",
            "business_type": "Type A",
            "location": "Location A",
            "website_traffic": 1000,
            "top_performing_pages": "Page A, Page B"
        })
        self.assertEqual(response.status_code, 201)

    def test_get_competitor(self):
        response_post = self.client.post('/competitor-profile', json={
            "business_name": "Competitor B",
            "business_type": "Type B",
            "location": "Location B",
            "website_traffic": 2000,
            "top_performing_pages": "Page C, Page D"
        })
        self.assertEqual(response_post.status_code, 201)

        competitor_id = response_post.get_json()['competitor']['id']

        response_get = self.client.get(f'/competitor/{competitor_id}')
        self.assertEqual(response_get.status_code, 200)
        self.assertIn(b'Competitor B', response_get.data)

if __name__ == '__main__':
    unittest.main()
