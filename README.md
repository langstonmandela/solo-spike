# Divine Passage: Child Welfare Management System

## Introduction

Divine Passage is a cutting-edge Child Welfare Management System designed exclusively for Divine Institute's group homes. It acts as a pivotal entry point for managing the comprehensive needs of residents (children) transitioning into care. This system streamlines the process of documenting, tracking, and accessing vital information about each child, ensuring a smooth and supportive passage into their new environment.

## Objectives

- **Streamline Child Intake and Welfare Management**: Facilitate a seamless integration process for children entering Divine Institute's care, ensuring their immediate and long-term needs are addressed efficiently.
- **Ensure Comprehensive Care for Residents**: Provide a robust framework for managing health, behavioral, and guardianship information, enabling personalized care plans.
- **Support Guardian and Staff Engagement**: Enhance communication and information sharing between staff, guardians, and external stakeholders involved in a child's welfare.
- **Lay Foundations for Scalable Growth**: Build a scalable and adaptable system that can evolve with the expanding needs of Divine Institute and its residents.

## Database Schema

### Overview

The Divine Passage system utilizes a relational database organized into several key tables, each designed to capture essential aspects of child welfare management.

### Tables and Descriptions

#### `users`
Manages user accounts for staff and guardians, containing login credentials and roles.
- **Fields**: `id`, `username`, `password`, `role`, `date_created`

#### `child_profile`
Stores comprehensive profiles for each child, including personal identifiers and placement details.
- **Fields**: `child_id`, `first_name`, `nick_name`, `last_name`, `date_of_birth`, `gender`, `date_of_placement`, `date_created`

#### `guardianship`
Links children with their legal guardians or caretakers, detailing guardianship status and CPS worker contacts.
- **Fields**: `guardianship_id`, `user_id`, `child_id`, `form_id`, `court_order_number`, `cps_worker_name`, `cps_worker_phone`, `cps_worker_email`, `date_created`

#### `health_history`
Captures health-related information, ensuring children receive appropriate medical care and support.
- **Fields**: `health_history_id`, `user_id`, `child_id`, `form_id`, `current_pediatrician`, `recent_doctor_visit`, `pediatrician_contact`, `dental_checkup`, `medications`, `chronic_illnesses`, `allergies`, `birth_complications`, `developmental_delays`, `date_created`

#### `behavioral_history`
Documents behavioral observations and therapeutic interventions, supporting emotional and psychological well-being.
- **Fields**: `behavioral_history_id`, `user_id`, `child_id`, `form_id`, `reason_for_counseling`, `previous_therapy`, `trauma_history`, `sexualized_behaviors`, `bed_wetting`, `sleep_changes`, `appetite_changes`, `date_created`

#### `family_history`
Details family backgrounds, including substance abuse and mental health issues, providing context for personalized care strategies.
- **Fields**: `family_history_id`, `user_id`, `child_id`, `form_id`, `substance_abuse_history`, `mental_health_issues`, `date_created`

#### `consent_forms`
Manages consents for medical treatments, activities, and information sharing, ensuring legal compliance and guardians' informed decision-making.
- **Fields**: `consent_form_id`, `user_id`, `child_id`, `form_id`, `consent_type`, `consent_given`, `guardian_signature`, `date_signed`, `date_created`

#### `financial_responsibility`
Outlines financial obligations and insurance details related to each child's care, facilitating fiscal management and support access.
- **Fields**: `financial_responsibility_id`, `user_id`, `child_id`, `form_id`, `insurance_provider`, `insurance_id`, `medicaid_id`, `fiscal_responsibility`, `date_created`

#### `authorization`
Handles data sharing authorizations, ensuring sensitive information is disclosed responsibly and in accordance with privacy regulations.
- **Fields**: `authorization_id`, `user_id`, `child_id`, `form_id`, `authorization_type`, `authorized_party`, `disclosure_details`, `date_created`

#### `forms`
Serves as a meta-table for tracking form submissions within the system, supporting document management and workflow optimization.
- **Fields**: `form_id`, `user_id`, `child_id`, `submission_date`, `form_type`, `date_created`, `status`

## Development Setup

Follow these steps to prepare the development environment:

- Install Node.js, PostgreSQL, and Nodemon.
- Use the provided SQL statements to set up the initial database schema.
- Run `npm install` to install necessary dependencies.
- Start the server with `npm run server` and the client with `npm run client`.

## Testing and Validation

Testing involves using tools like Postman for API route testing and direct database inspection to ensure data integrity. This phase is crucial for verifying the system's functionality and security measures.

## Future Directions

Divine Passage is poised for future enhancements, including the integration of analytical tools for outcome tracking, expansion of communication features for staff and guardians, and the incorporation of advanced security protocols.

## Conclusion

Divine Passage represents a significant advancement in child welfare management for Divine Institute. By centralizing and securing critical information, the system ensures that every child's journey through care is supported by informed decisions and comprehensive support, embodying Divine Institute's commitment to fostering positive outcomes for all residents.

For more information about Divine Institute and its mission, visit [www.divineinstitute.org/about](https://www.divineinstitute.org/about).

---