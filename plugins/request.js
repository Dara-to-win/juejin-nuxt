export default function({app: {$axios}}) {
    $axios.onResponse(response => {
      return response.data
    })
  }