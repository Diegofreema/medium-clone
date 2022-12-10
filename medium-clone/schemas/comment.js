export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'comment',
            type: 'text'
        },
        {
            name: 'name',
            title: 'Name',
            type:'string'

        },
        {
            title: 'Approved',
            name: 'approved',
            type: 'boolean',
            description: 'Comment wont show until approved by admin'
        },
        {
            name: 'post',
            type:'reference',
            to: {
                type: 'post',
        }
    }
    ]
}