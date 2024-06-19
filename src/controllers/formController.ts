import { Request, Response } from 'express';
import { getSubmissions, addSubmission, getSubmissionByIndex, deleteSubmissionByIndex, editSubmissionByIndex } from '../services/submissionService';

export const ping = (req: Request, res: Response) => {
    res.send(true);
};

export const submit = (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    addSubmission({ name, email, phone, github_link, stopwatch_time });
    res.status(201).send('Submission added');
};

export const read = (req: Request, res: Response) => {
    const { index } = req.query;
    const submission = getSubmissionByIndex(Number(index));
    res.send(submission);
};

export const deleteSubmission = (req: Request, res: Response) => {
    const { index } = req.query;
    deleteSubmissionByIndex(Number(index));
    res.send('Submission deleted');
};

export const edit = (req: Request, res: Response) => {
    const { index, name, email, phone, github_link, stopwatch_time } = req.body;
    editSubmissionByIndex(Number(index), {name, email, phone, github_link, stopwatch_time });
    res.send('Submission edited');
};
