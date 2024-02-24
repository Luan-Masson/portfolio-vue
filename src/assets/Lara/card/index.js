export default {
    root: {
        class: [
            //Shape
            'rounded-lg',
            'shadow-xl dark:shadow-xl dark:shadow-slate-700',

            //Color
            'bg-teal-100/30 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0'
        ]
    },
    body: {
        class: 'p-5'
    },
    title: {
        class: 'text-2xl font-bold mb-2'
    },
    subtitle: {
        class: [
            //Font
            'font-normal',

            //Spacing
            'mb-2',

            //Color
            'text-surface-600 dark:text-surface-0/60'
        ]
    },
    content: {
        class: 'py-5' // Vertical padding.
    },
    footer: {
        class: 'pt-5' // Top padding.
    }
};
