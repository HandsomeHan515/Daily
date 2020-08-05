export default {
    data () {
        return {
            name: 'han',
            age: 25
        }
    },
    mounted () {
        console.log('I am mixin')
    },
    methods: {
        handleClick () {
            console.log('mixin age', this.age)
        }
    }
}