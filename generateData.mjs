// generateData.mjs
import * as faker from '@faker-js/faker';

function generateUsers(n) {
    const users = [];
    for (let i = 0; i < n; i++) {
        users.push({
            username: faker.internet.userName(),
            password: faker.internet.password(),
            role: 'divine_employee',
            date_created: faker.date.past().toISOString()
        });
    }
    return users;
}

function generateChildProfiles(n) {
    const childProfiles = [];
    for (let i = 0; i < n; i++) {
        childProfiles.push({
            first_name: faker.name.firstName(),
            nick_name: faker.name.firstName(),
            last_name: faker.name.lastName(),
            date_of_birth: faker.date.past(10).toISOString(),
            gender: faker.random.arrayElement(['male', 'female', 'non-binary', 'not specified']),
            date_of_placement: faker.date.past(1).toISOString(),
            date_created: faker.date.past().toISOString()
        });
    }
    return childProfiles;
}

function generateGuardianship(n) {
    const guardianships = [];
    for (let i = 0; i < n; i++) {
        guardianships.push({
            court_order_number: faker.datatype.uuid(),
            cps_worker_name: faker.name.findName(),
            cps_worker_phone: faker.phone.phoneNumber(),
            cps_worker_email: faker.internet.email(),
            date_created: faker.date.past().toISOString()
        });
    }
    return guardianships;
}

function generateHealthHistory(n) {
    const healthHistories = [];
    for (let i = 0; i < n; i++) {
        healthHistories.push({
            current_pediatrician: faker.name.findName(),
            recent_doctor_visit: faker.datatype.boolean(),
            pediatrician_contact: faker.phone.phoneNumber(),
            dental_checkup: faker.datatype.boolean(),
            medications: faker.lorem.words(5),
            chronic_illnesses: faker.lorem.words(5),
            allergies: faker.lorem.words(3),
            birth_complications: faker.datatype.boolean(),
            developmental_delays: faker.lorem.words(4),
            date_created: faker.date.past().toISOString()
        });
    }
    return healthHistories;
}

function generateBehavioralHistory(n) {
    const behavioralHistories = [];
    for (let i = 0; i < n; i++) {
        behavioralHistories.push({
            reason_for_counseling: faker.lorem.sentence(),
            previous_therapy: faker.datatype.boolean(),
            trauma_history: faker.lorem.sentence(),
            sexualized_behaviors: faker.datatype.boolean(),
            bed_wetting: faker.datatype.boolean(),
            sleep_changes: faker.lorem.words(2),
            appetite_changes: faker.lorem.words(2),
            date_created: faker.date.past().toISOString()
        });
    }
    return behavioralHistories;
}

function generateFamilyHistory(n) {
    const familyHistories = [];
    for (let i = 0; i < n; i++) {
        familyHistories.push({
            substance_abuse_history: faker.lorem.sentence(),
            mental_health_issues: faker.lorem.sentence(),
            date_created: faker.date.past().toISOString()
        });
    }
    return familyHistories;
}

function generateConsentForms(n) {
    const consentForms = [];
    for (let i = 0; i < n; i++) {
        consentForms.push({
            consent_type: faker.lorem.word(),
            consent_given: faker.datatype.boolean(),
            guardian_signature: faker.name.findName(),
            date_signed: faker.date.past().toISOString(),
            date_created: faker.date.past().toISOString()
        });
    }
    return consentForms;
}

function generateFinancialResponsibility(n) {
    const financialResponsibilities = [];
    for (let i = 0; i < n; i++) {
        financialResponsibilities.push({
            insurance_provider: faker.company.companyName(),
            insurance_id: faker.datatype.uuid(),
            medicaid_id: faker.datatype.uuid(),
            fiscal_responsibility: faker.lorem.sentence(),
            date_created: faker.date.past().toISOString()
        });
    }
    return financialResponsibilities;
}

function generateAuthorization(n) {
    const authorizations = [];
    for (let i = 0; i < n; i++) {
        authorizations.push({
            authorization_type: 'information',
            authorized_party: faker.name.findName(),
            disclosure_details: faker.lorem.sentence(),
            date_created: faker.date.past().toISOString()
        });
    }
    return authorizations;
}

// Example: Generate comprehensive forms for 3 students
const users = generateUsers(3);
const childProfiles = generateChildProfiles(3);
const guardianships = generateGuardianship(3);
const healthHistories = generateHealthHistory(3);
const behavioralHistories = generateBehavioralHistory(3);
const familyHistories = generateFamilyHistory(3);
const consentForms = generateConsentForms(3);
const financialResponsibilities = generateFinancialResponsibility(3);
const authorizations = generateAuthorization(3);

console.log('Users:', JSON.stringify(users, null, 2));
console.log('Child Profiles:', JSON.stringify(childProfiles, null, 2));
console.log('Guardianships:', JSON.stringify(guardianships, null, 2));
console.log('Health Histories:', JSON.stringify(healthHistories, null, 2));
console.log('Behavioral Histories:', JSON.stringify(behavioralHistories, null, 2));
console.log('Family Histories:', JSON.stringify(familyHistories, null, 2));
console.log('Consent Forms:', JSON.stringify(consentForms, null, 2));
console.log('Financial Responsibilities:', JSON.stringify(financialResponsibilities, null, 2));
console.log('Authorizations:', JSON.stringify(authorizations, null, 2));
