
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL DEFAULT 'divine_employee',
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS child_profile (
  child_id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  nick_name VARCHAR(255),
  last_name VARCHAR(255) NOT NULL,
  date_of_birth DATE NOT NULL,
  gender VARCHAR(50) NOT NULL DEFAULT 'not specified',
  date_of_placement DATE NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS guardianship (
  guardianship_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  form_id INTEGER NOT NULL,
  court_order_number VARCHAR(255) NOT NULL DEFAULT 'pending',
  cps_worker_name VARCHAR(255) DEFAULT 'not specified',
  cps_worker_phone VARCHAR(255) DEFAULT 'not specified',
  cps_worker_email VARCHAR(255) DEFAULT 'not specified',
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (child_id) REFERENCES child_profile (child_id),
  FOREIGN KEY (form_id) REFERENCES forms (form_id)
);

CREATE TABLE IF NOT EXISTS health_history (
  health_history_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  form_id INTEGER NOT NULL,
  current_pediatrician VARCHAR(255) DEFAULT 'not specified',
  recent_doctor_visit BOOLEAN NOT NULL DEFAULT FALSE,
  pediatrician_contact VARCHAR(255) DEFAULT 'not specified',
  dental_checkup BOOLEAN NOT NULL DEFAULT FALSE,
  medications TEXT DEFAULT 'none',
  chronic_illnesses TEXT DEFAULT 'none',
  allergies TEXT DEFAULT 'none',
  birth_complications BOOLEAN NOT NULL DEFAULT FALSE,
  developmental_delays TEXT DEFAULT 'none',
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (child_id) REFERENCES child_profile (child_id),
  FOREIGN KEY (form_id) REFERENCES forms (form_id)
);

CREATE TABLE IF NOT EXISTS behavioral_history (
  behavioral_history_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  form_id INTEGER NOT NULL,
  reason_for_counseling TEXT DEFAULT 'not specified',
  previous_therapy BOOLEAN NOT NULL DEFAULT FALSE,
  trauma_history TEXT DEFAULT 'none',
  sexualized_behaviors BOOLEAN NOT NULL DEFAULT FALSE,
  bed_wetting BOOLEAN NOT NULL DEFAULT FALSE,
  sleep_changes TEXT DEFAULT 'no',
  appetite_changes TEXT DEFAULT 'no',
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (child_id) REFERENCES child_profile (child_id),
  FOREIGN KEY (form_id) REFERENCES forms (form_id)
);

CREATE TABLE IF NOT EXISTS family_history (
  family_history_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  form_id INTEGER NOT NULL,
  substance_abuse_history TEXT DEFAULT 'none',
  mental_health_issues TEXT DEFAULT 'none',
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (child_id) REFERENCES child_profile (child_id),
  FOREIGN KEY (form_id) REFERENCES forms (form_id)
);

CREATE TABLE IF NOT EXISTS consent_forms (
  consent_form_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  form_id INTEGER NOT NULL,
  consent_type VARCHAR(255) NOT NULL DEFAULT 'general',
  consent_given BOOLEAN NOT NULL DEFAULT FALSE,
  guardian_signature TEXT DEFAULT 'not specified',
  date_signed DATE NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (child_id) REFERENCES child_profile (child_id),
  FOREIGN KEY (form_id) REFERENCES forms (form_id)
);

CREATE TABLE IF NOT EXISTS financial_responsibility (
  financial_responsibility_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  form_id INTEGER NOT NULL,
  insurance_provider VARCHAR(255) DEFAULT 'not specified',
  insurance_id VARCHAR(255) DEFAULT 'not specified',
  medicaid_id VARCHAR(255) DEFAULT 'not specified',
  fiscal_responsibility VARCHAR(255) DEFAULT 'not specified',
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (child_id) REFERENCES child_profile (child_id),
  FOREIGN KEY (form_id) REFERENCES forms (form_id)
);

CREATE TABLE IF NOT EXISTS authorizations (
  authorization_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  form_id INTEGER NOT NULL,
  authorization_type VARCHAR(255) NOT NULL DEFAULT 'information',
  authorized_party VARCHAR(255) DEFAULT 'not specified',
  disclosure_details TEXT DEFAULT 'not specified',
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (child_id) REFERENCES child_profile (child_id),
  FOREIGN KEY (form_id) REFERENCES forms (form_id)
);

CREATE TABLE IF NOT EXISTS forms (
  form_id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL,
  child_id INTEGER NOT NULL,
  submission_date TIMESTAMP NOT NULL,
  form_type VARCHAR(255) NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL
);
