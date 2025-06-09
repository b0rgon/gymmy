export const mockRoutines = [
    {
        id: 1,
        name: 'Push',
        exercises: [
            {
                id: 1,
                name: 'Bench Press',
                sets: [
                    { id: 1, weight: 110, reps: 8, isPr: false },
                    { id: 2, weight: 100, reps: 5, isPr: false }
                ],
                notes: ''
            },
            {
                id: 201,
                name: 'Skull Crusher',
                sets: [
                    { id: 3, weight: 30, reps: 8, isPr: true },
                    { id: 4, weight: 30, reps: 6, isPr: false }
                ],
                notes: ''
            },
            {
                id: 207,
                name: 'Machine Press',
                sets: [
                    { id: 5, weight: 80, reps: 7, isPr: false },
                    { id: 6, weight: 75, reps: 6, isPr: false }
                ],
                notes: ''
            },
        ],
        notes: '',
    },
    {
        id: 2,
        name: 'Pull',
        exercises: [
            {
                id: 3,
                name: 'Deadlift',
                sets: [
                    { id: 7, weight: 200, reps: 3, isPr: true },
                ],
                notes: ''
            },
            {
                id: 301,
                name: 'Lat pulldowns',
                sets: [
                    { id: 8, weight: 70, reps: 8, isPr: true },
                    { id: 9, weight: 65, reps: 6, isPr: false }
                ],
                notes: ''
            },
            {
                id: 407,
                name: 'Hammer Curls',
                sets: [
                    { id: 10, weight: 17.5, reps: 7, isPr: false },
                    { id: 11, weight: 15, reps: 7, isPr: false },
                    { id: 12, weight: 15, reps: 7, isPr: false }
                ],
                notes: ''
            },
        ],
        notes: ''
    },
    {
        id: 3,
        name: 'Legs',
        exercises: [
            {
                id: 2,
                name: 'Squat',
                sets: [
                    { id: 13, weight: 120, reps: 5, isPr: true },
                    { id: 14, weight: 110, reps: 4, isPr: false },
                    { id: 15, weight: 100, reps: 4, isPr: false }
                ],
                notes: 'agachamento'
            },
            {
                id: 202,
                name: 'Leg Extension',
                sets: [
                    { id: 16, weight: 60, reps: 8, isPr: true },
                    { id: 17, weight: 60, reps: 6, isPr: false }
                ],
                notes: ''
            },
            {
                id: 108,
                name: 'Seated Leg Curl',
                sets: [
                    { id: 18, weight: 55, reps: 8, isPr: false },
                    { id: 19, weight: 55, reps: 7, isPr: false }
                ],
                notes: ''
            },
        ],
        notes: ''
    }
]