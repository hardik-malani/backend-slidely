import fs from 'fs';
import path from 'path';
import { Submission } from '../models/submission';

const filePath = path.join(__dirname, '../..', 'src', 'db.json');

// Ensure the db.json file exists
if (!fs.existsSync(filePath)) {
    console.log('Creating db.json file...');
    fs.writeFileSync(filePath, JSON.stringify({ submissions: [] }, null, 2));
} else {
    console.log('db.json file exists...');
}

// Read submissions from the JSON file
const readFile = (): { submissions: Submission[] } => {
    const data: string = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// Write submissions to the JSON file
const writeFile = (data: { submissions: Submission[] }): void => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const getSubmissions = (): Submission[] => {
    console.log('Reading submissions from db.json...');
    return readFile().submissions;
};

export const addSubmission = (submission: Submission): void => {
    console.log('Adding a new submission...');
    const submissions: Submission[] = getSubmissions();
    submissions.push(submission);
    writeFile({ submissions });
    console.log('Submission added:', submission);
};

export const getSubmissionByIndex = (index: number): Submission | null => {
    const submissions: Submission[] = getSubmissions();
    return submissions[index] || null;
};

export const deleteSubmissionByIndex = (index: number): void => {
    let submissions: Submission[] = getSubmissions();
    submissions = submissions.filter((_, i) => i !== index);
    writeFile({ submissions });
};

export const editSubmissionByIndex = (index: number, submission: Submission): void => {
    const submissions: Submission[] = getSubmissions();
    submissions[index] = submission;
    writeFile({ submissions });
};
