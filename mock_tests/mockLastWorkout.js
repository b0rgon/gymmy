export const mockLastWorkout =
{
    id: 1,
    name: 'Upper Day B',
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
            name: 'Dumbbell Pullover',
            sets: [
                { id: 103, weight: 30, reps: 7, isPr: true, setNotes: '' },
                { id: 104, weight: 30, reps: 6, isPr: false, setNotes: '' }
            ],
        },
        {
            id: 1003,
            name: 'Seated Cable Row',
            sets: [
                { id: 105, weight: 70, reps: 8, isPr: true, setNotes: '' },
                { id: 106, weight: 65, reps: 7, isPr: false, setNotes: '' }
            ],
        },
    ],
    workoutNotes: 'Estava doente com 56º de febre por isso estava muito fraco e triste.',
}