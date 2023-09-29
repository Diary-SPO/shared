export interface Organization {
    'organizationType': string;
    'name': string;
    'shortName': string;
    'abbreviation': string;
    'legalStatus': string;
    'address': {
        'region': string;
        'settlement': string;
        'mailAddress': string;
        'kladr': string;
    };
    'organizationDeptId': 1;
    'phone': string;
    'fax': string;
    'email': string;
    'site': string;
    'directorName': string;
    'directorPosition': string;
    'studyUnitNumber': string;
    'organizationStatus': string;
    'isEntrepreneurOwned': boolean;
    'entrepreneurName': string;
    'organizationId': string;
    'headOrganizationName': string;
    'isSubdepartment': boolean;
    'additionalName': string;
    'type': string;
    'legalAddress': string;
    'actualAddress': string;
    'bankingDetails': {
        'okved': string;
        'inn': string;
        'kpp': string;
        'ogrn': string;
        'oktmo': string;
        'okopth': string;
        'okths': string;
        'okpo': string;
        'others': string;
        'okogu': string;
        'founderType': string;
        'founders': string;
        'okato': string;
    };
    'administration': {
        'eService': {
            'isEnabled': true;
            'cacheEnrolleeListTimeout': number;
            'cacheSpecialtyListTimeout': number;
            'cacheEnrolleeTimeout': number;
            'useRestIntegration': true;
        };
        'organizationId': string;
        'attestation': {
            'isEnabled': boolean;
        };
        'factHours': {
            'isEnabled': boolean;
        };
        'vkChats': {
            'communityId': string;
            'communityToken': string;
        };
    };
}
interface UserData {
    installName: string;
    localNetwork: boolean;
    tenantName: string;
    tenants: {
        SPO_23: {
            students: [
                {
                    groupId: number;
                    groupName: string;
                    firstName: string;
                    lastName: string;
                    middleName: string;
                    id: number;
                }
            ];
            firstName: string;
            isTrusted: boolean;
            lastName: string;
            middleName: string;
            studentRole: {
                id: number;
                studentGroupId: number;
            };
            settings: {
                organization: Organization;
            };
        };
    };
}
export declare enum LessonType {
    'Lesson' = "\u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u0437\u0430\u043D\u044F\u0442\u0438\u0438",
    'Control' = "\u041A\u043E\u043D\u0442\u0440\u043E\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
    'Independent' = "\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
    'Laboratory' = "\u041B\u0430\u0431\u043E\u0440\u0430\u0442\u043E\u0440\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
    'Slice' = "\u0421\u0440\u0435\u0437\u043E\u0432\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
    'Home' = "\u0414\u043E\u043C\u0430\u0448\u043D\u0435\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u0435",
    'Test' = "\u0422\u0435\u0441\u0442",
    'Review' = "\u0420\u0435\u0444\u0435\u0440\u0430\u0442",
    'Report' = "\u0414\u043E\u043A\u043B\u0430\u0434",
    'Colloquium' = "\u041A\u043E\u043B\u043B\u043E\u043A\u0432\u0438\u0443\u043C",
    'SportStandarts' = "\u0421\u0434\u0430\u0447\u0430 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u044B\u0445 \u043D\u0430\u0440\u043C\u0430\u0442\u0438\u0432\u043E\u0432",
    'PracticeWork' = "\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430",
    '' = "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E"
}
export declare enum Grade {
    Five = 5,
    Four = 4,
    Three = 3,
    Two = 2,
    One = 1,
    '' = "\u0414"
}
export declare enum LessonWorkType {
    'Lecture' = "\u041B\u0435\u043A\u0446\u0438\u044F",
    'Lesson' = "\u0423\u0440\u043E\u043A",
    'PracticalWork' = "\u041F\u0440\u0430\u043A\u0442. \u0440\u0430\u0431\u043E\u0442\u0430",
    'PracticalTraining' = "\u041F\u0440\u0430\u043A\u0442. \u0437\u0430\u043D\u044F\u0442\u0438\u0435",
    'Seminar' = "\u0421\u0435\u043C\u0438\u043D\u0430\u0440",
    '' = "\u041D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D"
}
export declare enum EAbsenceTypes {
    'IsAbsent' = "\u041D",
    'IsLate' = "\u041E"
}
export declare enum EAbsenceTypesDescription {
    'Н' = "\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435",
    'О' = "\u041E\u043F\u043E\u0437\u0434\u0430\u043D\u0438\u0435"
}
type GradeKeys = keyof typeof Grade;
export type TextMark = GradeKeys;
export type TMark = typeof Grade[GradeKeys];
export type TLesson = keyof typeof LessonWorkType;
export type LessonTypes = keyof typeof LessonType;
export type AbsenceType = keyof typeof EAbsenceTypes;
export interface Task {
    attachments: [];
    id: number;
    isRequired: boolean;
    mark: TextMark;
    topic?: string;
    type: LessonTypes;
}
interface Teacher {
    firstName: string;
    id: number;
    lastName: string;
    middleName: string;
}
export interface Timetable {
    classroom: {
        building: string;
        id: number;
        name: string;
    };
    teacher?: Teacher;
}
export interface Gradebook {
    id: number;
    lessonType: TLesson;
    tasks?: Task[];
    themes?: string[];
    absenceType?: AbsenceType;
}
export interface Lesson {
    lessonId?: string;
    endTime: string;
    startTime: string;
    name: string | null;
    timetable: Timetable;
    gradebook?: Gradebook;
    tasks?: Task[];
}
export interface Day {
    date: Date;
    lessons: Lesson[] | null;
}
export interface IMark {
    subjects: {
        id: number;
        mark: TMark;
        name: string;
    }[];
}
export interface AuthData {
    cookie: string;
    data: UserData;
}
export interface PerformanceCurrent {
    daysWithMarksForSubject: [
        {
            subjectName: string;
            daysWithMarks?: [
                {
                    day: Date;
                    absenceType?: AbsenceType;
                    markValues: TextMark[];
                }
            ];
            averageMark: TMark;
        }
    ];
    monthsWithDays: [
        {
            month: {
                num: number;
                name: string;
            };
            daysWithLessons: [Date];
        }
    ];
}
export declare enum Examinations {
    'DifferentiatedTest' = "\u0414\u0438\u0444\u0444. \u0437\u0430\u0447\u0451\u0442",
    'Test' = "\u0417\u0430\u0447\u0451\u0442",
    'Exam' = "\u042D\u043A\u0437\u0430\u043C\u0435\u043D",
    'Other' = "\u0414\u0440. \u0444\u043E\u0440\u043C\u0430 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F"
}
export type ExaminationType = keyof typeof Examinations;
export type TermType = 'Semester';
export interface AttestationResponse {
    termType: TermType;
    termNumber: number;
    year: number;
    students: {
        id: number;
        firstName: string;
        lastName: string;
        middleName: string;
    }[];
    subjects: {
        examinationType: ExaminationType;
        marks: Record<string, number>;
        name: string;
        id: number;
    }[];
    profModules: unknown[];
    courseWorks: unknown[];
    departmentName: string;
}
export interface NotificationsResponse {
    id: number;
    attachments: [];
    date: Date;
    title: string;
    text: string;
    isForEmployees: boolean;
    isForStudents: boolean;
    isForParents: boolean;
    shouldDeleteNews: boolean;
    deleteInDays: number;
}
export {};
