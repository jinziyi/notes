/**
 * Created by cjy on 16/11/23.
 */

export default (...args) => init => args.reverse().reduce((a, b) => b(a), init)