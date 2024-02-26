export default {
    root: {
        class: 'fixed flex z-100'
    },
    button: {
        root: ({ props, context }) => ({
            class: [
                'relative',
                'z-100',

                // Alignments
                'items-center inline-flex text-center align-bottom justify-center',

                // Sizes & Spacing
                'leading-[normal]',
                'w-12 h-12 p-0 py-3',

                // Shapes
                'rounded-full',
                'shadow-lg',
                'shadow-teal-200 dark:shadow-teal-800',
                'transition duration-200 ease-in-out',

                // --- Severity Buttons ---

                // Primary Button
                {
                    'text-surface-950 dark:text-surface-50': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'bg-slate-300 dark:bg-slate-950/75': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                },
                // Primary Text Button
                { 'text-primary-900 dark:text-primary-400': props.text && props.severity === null && !props.plain },
                // Primary Outlined Button
                { 'text-primary-500 border border-primary-500 ': props.outlined && props.severity === null && !props.plain },

                // --- Severity Button States ---

                // Primary
                'hover:bg-slate-400/75 hover:bg-primary-300/20 dark:hover:bg-slate-800/90',
            ]
        }),
        label: ({ props }) => ({
            class: [
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                },
                { 'flex-1': props.label !== null, 'invisible w-0': props.label == null }
            ]
        }),
        icon: ({ props }) => ({
            class: [
                'mx-0',
                {
                    'mr-2': props.iconPos == 'left' && props.label != null,
                    'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                    'mb-2': props.iconPos == 'top' && props.label != null,
                    'mt-2': props.iconPos == 'bottom' && props.label != null
                }
            ]
        }),
        loadingicon: ({ props }) => ({
            class: [
                'h-4 w-4',
                'mx-0',
                {
                    'mr-2': props.iconPos == 'left' && props.label != null,
                    'ml-2 order-1': props.iconPos == 'right' && props.label != null,
                    'mb-2': props.iconPos == 'top' && props.label != null,
                    'mt-2': props.iconPos == 'bottom' && props.label != null
                },
                'animate-spin'
            ]
        }),
        badge: ({ props }) => ({
            class: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
        })
    },
    menu: {
        class: [
            // Spacing
            'm-0 p-0',

            // Layout & Flexbox
            'list-none flex items-center justify-center',

            // Transitions
            'transition delay-200',

            // Z-Index (Positioning)
            'z-100'
        ]
    },
    menuitem: ({ props, context }) => ({
        class: [
            'transform transition-transform duration-200 ease-out transition-opacity duration-800',

            // Conditional Appearance
            context.hidden ? 'opacity-0 scale-0' : 'opacity-1 scale-100',

            // Conditional Spacing
            {
                'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
            },

            // Conditional Positioning
            { absolute: props.type !== 'linear' }
        ]
    }),
    action: {
        class: [
            // Flexbox & Alignment
            'flex items-center justify-center',

            // Size
            'w-10 h-10',

            // Shape
            'rounded-full relative overflow-hidden',

            // Appearance
            'bg-surface-600 dark:bg-surface-0/80 text-white dark:text-surface-900/80',

            // Hover Effects
            'hover:bg-surface-700 dark:hover:bg-surface-200/80'
        ]
    },
    mask: ({ state }) => ({
        class: [
            // Base Styles
            'absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-100 cursor-pointer',

            // Conditional Appearance
            {
                'opacity-0 pointer-events-none': !state.d_visible,
                'opacity-100 transition-opacity duration-400 ease-in-out': state.d_visible
            }
        ]
    })
};
