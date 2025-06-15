const mockWorkouts = [
    {
        id: 1,
        date: '2025-06-09',
        name: 'Push',
        notes: 'Feeling strong today!',
        duration: 54,
        exercises: [
            {
                id: 1,
                name: 'Bench Press',
                sets: [
                    { id: 1, weight: 110, reps: 8, isPr: false, setNotes: 'Estava forte' },
                    { id: 2, weight: 100, reps: 5, isPr: false, setNotes: '' }
                ]
            },
            {
                id: 201,
                name: 'Skull Crusher',
                sets: [
                    { id: 3, weight: 30, reps: 8, isPr: true, setNotes: 'Top' },
                    { id: 4, weight: 30, reps: 6, isPr: false, setNotes: 'Muito top' }
                ]
            },
            {
                id: 207,
                name: 'Machine Press',
                sets: [
                    { id: 5, weight: 80, reps: 7, isPr: false, setNotes: '' },
                    { id: 6, weight: 75, reps: 6, isPr: false, setNotes: 'Ok' }
                ]
            },
        ],
    },
    {
        id: 2,
        date: '2025-06-10',
        name: 'Pull',
        notes: '',
        duration: 43,
        exercises: [
            {
                id: 343,
                name: 'Chest Supported T-Bar Row',
                sets: [
                    { id: 8, weight: 40, reps: 7, isPr: true, setNotes: '' },
                    { id: 9, weight: 35, reps: 6, isPr: false, setNotes: '' }
                ],
            },
            {
                id: 301,
                name: 'Lat pulldown',
                sets: [
                    { id: 18, weight: 70, reps: 8, isPr: true, setNotes: '' },
                    { id: 19, weight: 65, reps: 6, isPr: false, setNotes: '' }
                ],
            },
            {
                id: 407,
                name: 'Hammer Curls',
                sets: [
                    { id: 30, weight: 17.5, reps: 7, isPr: false, setNotes: '' },
                    { id: 31, weight: 15, reps: 7, isPr: false, setNotes: '' },
                    { id: 32, weight: 15, reps: 7, isPr: false, setNotes: '' }
                ],
            },
        ],
    },
    {
        id: 3,
        date: '2025-06-12',
        name: 'Legs',
        notes: 'Hoje treinei pernas.',
        duration: 66,
        exercises: [
            {
                id: 2,
                name: 'Squat',
                sets: [
                    { id: 13, weight: 120, reps: 5, isPr: true, setNotes: '' },
                    { id: 14, weight: 110, reps: 4, isPr: false, setNotes: '' },
                    { id: 15, weight: 100, reps: 4, isPr: false, setNotes: '' }
                ],
            },
            {
                id: 202,
                name: 'Leg Extension',
                sets: [
                    { id: 16, weight: 60, reps: 8, isPr: true, setNotes: '' },
                    { id: 17, weight: 60, reps: 6, isPr: false, setNotes: '' }
                ],
            },
            {
                id: 108,
                name: 'Seated Leg Curl',
                sets: [
                    { id: 18, weight: 55, reps: 8, isPr: false, setNotes: '' },
                    { id: 19, weight: 55, reps: 7, isPr: false, setNotes: '' }
                ],
            },
        ],
    },
    {
        id: 4,
        date: '2025-06-13',
        name: 'Upper',
        notes: 'upper dayy !!',
        duration: 71,
        exercises: [
            {
                id: 1001,
                name: 'Incline Dumbbell Press',
                sets: [
                    { id: 101, weight: 27.5, reps: 7, isPr: false, setNotes: '' },
                    { id: 102, weight: 27.5, reps: 6, isPr: false, setNotes: '' }
                ],
            },
            {
                id: 1002,
                name: 'Seated Cable Row',
                sets: [
                    { id: 105, weight: 70, reps: 8, isPr: true, setNotes: '' },
                    { id: 106, weight: 65, reps: 7, isPr: false, setNotes: '' }
                ],
            },
            {
                id: 1003,
                name: 'Chest Fly',
                sets: [
                    { id: 103, weight: 50, reps: 7, isPr: false, setNotes: 'Repetir no próximo treino.' },
                    { id: 104, weight: 50, reps: 6, isPr: false, setNotes: '' }
                ],
            },
        ],
    }
];

export default mockWorkouts;
