import ComboBox from "@/components/ComboBox"

export default {
    Title: "ComboBox",
    tags: ['autodocs'],
    component: ComboBox,
    argTypes: {
        disabled: {
            control: "boolean"
        }
    },
    args: {
        className: "w-64"
    },
    render: args => <div className="w-screen flex justify-center"><ComboBox {...args}/></div>
}

export const Default = {
    args: {
        title: "Select language....",
        placeholder: "Search language...",
        options: [
            { label: "English", value: "en" },
            { label: "French", value: "fr" },
            { label: "German", value: "de" },
            { label: "Spanish", value: "es" },
            { label: "Portuguese", value: "pt" },
            { label: "Russian", value: "ru" },
            { label: "Japanese", value: "ja" },
            { label: "Korean", value: "ko" },
            { label: "Chinese", value: "zh" },
        ]
    },
}

export const Groups = {
    args: {
        title: "Select topic....",
        placeholder: "Search topic...",
        options: [
            {
                title: "Frameworks",
                optionsList: [
                        {
                        value: "next.js",
                        label: "Next.js",
                      },
                      {
                        value: "sveltekit",
                        label: "SvelteKit",
                      },
                      {
                        value: "nuxt.js",
                        label: "Nuxt.js",
                      },
                      {
                        value: "remix",
                        label: "Remix",
                      },
                      {
                        value: "astro",
                        label: "Astro",
                      },
                ]
            },
            {
                title: "Languages",
                optionsList: [
                    { label: "English", value: "en" },
                    { label: "French", value: "fr" },
                    { label: "German", value: "de" },
                    { label: "Spanish", value: "es" },
                    { label: "Portuguese", value: "pt" },
                    { label: "Russian", value: "ru" },
                    { label: "Japanese", value: "ja" },
                    { label: "Korean", value: "ko" },
                    { label: "Chinese", value: "zh" },
                ]
            }
            
        ]
    }
}

export const CreateOption = {
    args: {
        ...Default.args,
        create: true,
    }
}

export const Disabled = {
    args: {
        disabled: true,
        ...Default.args
    }
}
