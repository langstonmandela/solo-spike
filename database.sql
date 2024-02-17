
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


-- Susan 'Susie' Herbshire
-- Inserting data into the users table
INSERT INTO users (username, password, role, date_created) VALUES
('susan_h', 'password789', 'client', '2022-12-15');

-- Inserting data into the child_profile table
INSERT INTO child_profile (first_name, nick_name, last_name, date_of_birth, gender, date_of_placement, date_created) VALUES
('Susan', 'Susie', 'Herbshire', '2010-05-12', 'female', '2023-02-10', '2022-12-15');

-- Inserting data into the guardianship table
INSERT INTO guardianship (user_id, child_id, form_id, court_order_number, cps_worker_name, cps_worker_phone, cps_worker_email, date_created) VALUES
(3, 3, 3, 'approved', 'Jessica Adams', '123-456-7890', 'jessica@example.com', '2022-12-15');

-- Inserting data into the health_history table
INSERT INTO health_history (user_id, child_id, form_id, current_pediatrician, recent_doctor_visit, pediatrician_contact, dental_checkup, medications, chronic_illnesses, allergies, birth_complications, developmental_delays, date_created) VALUES
(3, 3, 3, 'Dr. Johnson', true, '555-123-4567', true, 'Vitamin C', 'Asthma', 'Pollen', true, 'Speech delay', '2022-12-15');

-- Inserting data into the behavioral_history table
INSERT INTO behavioral_history (user_id, child_id, form_id, reason_for_counseling, previous_therapy, trauma_history, sexualized_behaviors, bed_wetting, sleep_changes, appetite_changes, date_created) VALUES
(3, 3, 3, 'Anxiety', true, 'Car accident', false, false, 'Trouble sleeping', 'Normal', '2022-12-15');

-- Inserting data into the family_history table
INSERT INTO family_history (user_id, child_id, form_id, substance_abuse_history, mental_health_issues, date_created) VALUES
(3, 3, 3, 'None', 'Depression', '2022-12-15');

-- Inserting data into the consent_forms table
INSERT INTO consent_forms (user_id, child_id, form_id, consent_type, consent_given, guardian_signature, date_signed, date_created) VALUES
(3, 3, 3, 'medical', true, 'Susan Herbshire', '2023-02-15', '2022-12-15');

-- Inserting data into the financial_responsibility table
INSERT INTO financial_responsibility (user_id, child_id, form_id, insurance_provider, insurance_id, medicaid_id, fiscal_responsibility, date_created) VALUES
(3, 3, 3, 'XYZ Insurance', '123456789', '987654321', 'Shared', '2022-12-15');

-- Inserting data into the authorizations table
INSERT INTO authorizations (user_id, child_id, form_id, authorization_type, authorized_party, disclosure_details, date_created) VALUES
(3, 3, 3, 'medical', 'Dr. Johnson', 'Full medical disclosure', '2022-12-15');

-- Inserting data into the forms table
INSERT INTO forms (user_id, child_id, submission_date, form_type, date_created, status) VALUES
(3, 3, '2023-02-15', 'medical', '2022-12-15', 'submitted');


-- Emily 'Em' Doe
-- Inserting data into the users table
INSERT INTO users (username, password, role, date_created) VALUES
('john_doe', 'password123', 'admin', CURRENT_TIMESTAMP);

-- Inserting data into the child_profile table
INSERT INTO child_profile (first_name, nick_name, last_name, date_of_birth, gender, date_of_placement, date_created) VALUES
('Emily', 'Em', 'Doe', '2010-05-15', 'female', '2020-07-20', CURRENT_TIMESTAMP);

-- Inserting data into the guardianship table
INSERT INTO guardianship (user_id, child_id, form_id, court_order_number, cps_worker_name, cps_worker_phone, cps_worker_email, date_created) VALUES
(1, 1, 1, 'approved', 'Jane Smith', '123-456-7890', 'jane@example.com', CURRENT_TIMESTAMP);

-- Inserting data into the health_history table
INSERT INTO health_history (user_id, child_id, form_id, current_pediatrician, recent_doctor_visit, pediatrician_contact, dental_checkup, medications, chronic_illnesses, allergies, birth_complications, developmental_delays, date_created) VALUES
(1, 1, 1, 'Dr. Johnson', true, '555-123-4567', true, 'Tylenol', 'Asthma', 'Peanuts', false, 'Speech delay', CURRENT_TIMESTAMP);

-- Inserting data into the behavioral_history table
INSERT INTO behavioral_history (user_id, child_id, form_id, reason_for_counseling, previous_therapy, trauma_history, sexualized_behaviors, bed_wetting, sleep_changes, appetite_changes, date_created) VALUES
(1, 1, 1, 'Anxiety', true, 'Car accident', false, false, 'Difficulty falling asleep', 'Increased appetite', CURRENT_TIMESTAMP);

-- Inserting data into the family_history table
INSERT INTO family_history (user_id, child_id, form_id, substance_abuse_history, mental_health_issues, date_created) VALUES
(1, 1, 1, 'Alcoholism', 'Depression', CURRENT_TIMESTAMP);

-- Inserting data into the consent_forms table
INSERT INTO consent_forms (user_id, child_id, form_id, consent_type, consent_given, guardian_signature, date_signed, date_created) VALUES
(1, 1, 1, 'medical', true, 'John Doe', '2020-08-01', CURRENT_TIMESTAMP);

-- Inserting data into the financial_responsibility table
INSERT INTO financial_responsibility (user_id, child_id, form_id, insurance_provider, insurance_id, medicaid_id, fiscal_responsibility, date_created) VALUES
(1, 1, 1, 'XYZ Insurance', '123456789', '987654321', 'Shared', CURRENT_TIMESTAMP);

-- Inserting data into the authorizations table
INSERT INTO authorizations (user_id, child_id, form_id, authorization_type, authorized_party, disclosure_details, date_created) VALUES
(1, 1, 1, 'medical', 'Dr. Johnson', 'Full medical disclosure', CURRENT_TIMESTAMP);

-- Inserting data into the forms table
INSERT INTO forms (user_id, child_id, submission_date, form_type, date_created, status) VALUES
(1, 1, '2020-08-01', 'medical', CURRENT_TIMESTAMP, 'submitted');



-- Courtney Rumsfield
-- Inserting data into the users table
INSERT INTO users (username, password, role, date_created) VALUES
('courtney_r', 'password456', 'client', CURRENT_TIMESTAMP);

-- Inserting data into the child_profile table
INSERT INTO child_profile (first_name, nick_name, last_name, date_of_birth, gender, date_of_placement, date_created) VALUES
('Courtney', 'Court', 'Rumsfield', '2012-09-20', 'female', '2022-03-15', CURRENT_TIMESTAMP);

-- Inserting data into the guardianship table
INSERT INTO guardianship (user_id, child_id, form_id, court_order_number, cps_worker_name, cps_worker_phone, cps_worker_email, date_created) VALUES
(2, 2, 2, 'pending', 'Emily Johnson', '987-654-3210', 'emily@example.com', CURRENT_TIMESTAMP);

-- Inserting data into the health_history table
INSERT INTO health_history (user_id, child_id, form_id, current_pediatrician, recent_doctor_visit, pediatrician_contact, dental_checkup, medications, chronic_illnesses, allergies, birth_complications, developmental_delays, date_created) VALUES
(2, 2, 2, 'Dr. Smith', false, '555-987-6543', false, 'None', 'None', 'Pollen', false, 'None', CURRENT_TIMESTAMP);

-- Inserting data into the behavioral_history table
INSERT INTO behavioral_history (user_id, child_id, form_id, reason_for_counseling, previous_therapy, trauma_history, sexualized_behaviors, bed_wetting, sleep_changes, appetite_changes, date_created) VALUES
(2, 2, 2, 'Adjustment issues', false, 'None', false, false, 'Normal', 'Normal', CURRENT_TIMESTAMP);

-- Inserting data into the family_history table
INSERT INTO family_history (user_id, child_id, form_id, substance_abuse_history, mental_health_issues, date_created) VALUES
(2, 2, 2, 'None', 'None', CURRENT_TIMESTAMP);

-- Inserting data into the consent_forms table
INSERT INTO consent_forms (user_id, child_id, form_id, consent_type, consent_given, guardian_signature, date_signed, date_created) VALUES
(2, 2, 2, 'medical', true, 'Courtney Rumsfield', '2022-03-20', CURRENT_TIMESTAMP);

-- Inserting data into the financial_responsibility table
INSERT INTO financial_responsibility (user_id, child_id, form_id, insurance_provider, insurance_id, medicaid_id, fiscal_responsibility, date_created) VALUES
(2, 2, 2, 'ABC Insurance', '987654321', '123456789', 'Shared', CURRENT_TIMESTAMP);

-- Inserting data into the authorizations table
INSERT INTO authorizations (user_id, child_id, form_id, authorization_type, authorized_party, disclosure_details, date_created) VALUES
(2, 2, 2, 'medical', 'Dr. Smith', 'Full medical disclosure', CURRENT_TIMESTAMP);

-- Inserting data into the forms table
INSERT INTO forms (user_id, child_id, submission_date, form_type, date_created, status) VALUES
(2, 2, '2022-03-20', 'medical', CURRENT_TIMESTAMP, 'submitted');
