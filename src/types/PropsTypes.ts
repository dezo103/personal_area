export type ContactPropsType = {
    contactName: string
    id: string
}

export type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}