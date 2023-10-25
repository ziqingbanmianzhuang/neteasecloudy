//一些公共的配置
export default {
    timeout: 10000,//default 0s //timeout指定请求超时前的毫秒数,如果请求时间超过timeout的时间,请求将被终止

    headers: {
        //headers是要发送的自定义报头 比如 'X-Requested-with':'XMLHttpRequest',mdn:http标头不区分大小写,自定义专用的标头之前可以与 X- 前缀一起使用,但是已经被弃用;
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        
        /*  验证 */


        //用于提供服务器验证用户代理身份的凭据，允许访问受保护的资源,//凭据，根据指定的方案编码。//服务器401 Unauthorized，其中包含至少一个 WWW-Authenticate 标头。该标头表示哪些身份验证的方案可用于访问资源（以及客户端使用它们时需要的额外的信息）。用户代理应该从这些提供的身份验证方案中选择它支持的最安全的身份验证方案，并提示用户提供凭据，然后重新获取资源（包含 Authorization 标头中编码的凭据）。
        //Authorization: Basic <credentials>

        // 包含了用户代理提供给代理服务器的用于身份验证的凭证,通常是在服务器返回了 407 Proxy Authentication Required 响应状态码及 Proxy-Authenticate 首部后发送的。
        // 'Proxy-Authorization':''


        /* 缓存 */

        //通用消息头字段，被用于在 http 请求和响应中，通过指定指令来实现缓存机制
        //缓存指令是单向的，这意味着在请求中设置的指令，不一定被包含在响应中
        //不区分大小写，但建议使用小写。多个指令以逗号分隔。具有可选参数，可以用令牌或者带引号的字符串语法。
        //拓展缓存指令不是核心 HTTP 缓存标准文档的一部分，使用前请注意检查兼容性！
        // 客户端可以在 HTTP 请求中使用的标准 Cache-Control 指令。
        // Cache-Control: max-age=<seconds> //设置缓存存储最大周期，超时,缓存被认为过期 (单位秒)。与Expires相反，时间是相对请求的时间。
        // Cache-Control: max-stale[=<seconds>] //客户端愿意接收已经过期的资源。设置一个可选的秒数，响应不能已经过时超过该给定的时间。
        // Cache-Control: min-fresh=<seconds> //表示客户端希望获取一个能在指定的秒数内保持其最新状态的响应。
        // Cache-control: no-cache //在发布缓存副本之前，强制要求缓存把请求提交给原始服务器进行验证 (协商缓存验证)。
        // Cache-control: no-store //缓存不应存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。
        // Cache-control: no-transform //不得对资源进行转换。Content-Encoding、Content-Range、Content-Type等 HTTP 头不能由代理修改
        // Cache-control: only-if-cached //表明客户端只接受已缓存的响应，并且不要向原始服务器检查是否有更新的拷贝。

        //是一个在 HTTP/1.0 中规定的通用首部,用来向后兼容只支持 HTTP/1.0 协议的缓存服务器
        //假如 Cache-Control 不存在，它的行为与 Cache-Control: no-cache 一致。建议只在需要兼容 HTTP/1.0 客户端的场合下应用 Pragma 首部。
        // 'Pragma':'no-cache'

        /* 条件 */


        //表示这是一个条件请求
        //在请求方法为 GET 和 HEAD 的情况下，服务器仅在请求的资源满足此首部列出的 ETag值时才会返回资源。而对于 PUT 或其他非安全方法来说，只有在满足条件的情况下才可以将资源上传。
        //对于 GET 和 HEAD 方法，搭配 Range首部使用，可以用来保证新请求的范围与之前请求的范围是对同一份资源的请求
        //ETag 之间的比较使用的是强比较算法，即只有在每一个字节都相同的情况下，才可以认为两个文件是相同的。在 ETag 前面添加 W/ 前缀表示可以采用相对宽松的算法。
        // 'If-Match':''

        //仅当服务器上没有资源的 ETag 属性值与这个首部中列出的相匹配的时候，服务器端才会返回所请求的资源，
        //ETag 属性之间的比较采用的是弱比较算法，即两个文件除了每个字节都相同外，内容一致也可以认为是相同的。
        //例如，如果两个页面仅仅在页脚的生成时间有所不同，就可以认为二者是相同的。
        //当与 If-Modified-Since 一同使用的时候，If-None-Match 优先级更高（假如服务器支持的话）。
        // 以下是两个常见的应用场景：
        //采用 GET 或 HEAD 方法，来更新拥有特定的ETag 属性值的缓存。
        //采用其他方法,PUT，将 If-None-Match used 的值设置为 * ，用来生成事先并不知道是否存在的文件，确保先前并没有进行过类似的上传操作，防止之前操作数据的丢失。
        // 'If-None-Match':''

        //服务器只在所请求的资源在给定的日期时间之后对内容进行过修改的情况下才会将资源返回,
        //只可以用在 GET 或 HEAD 请求中。
        //最常见的应用场景是来更新没有特定 ETag 标签的缓存实体。
        //'If-Modified-Since':''

        //常见的应用场景有两种：
        //与 non-safe 方法如 POST 搭配使用,假如在原始副本获取之后，服务器上所存储的文档已经被修改，那么对其作出的编辑会被拒绝提交。
        //与含有 If-Range 消息头的范围请求搭配使用，用来确保新的请求片段来自于未经修改的文档。
        //'If-Unmodified-Since':''


        /* 连接管理 */

        //控制网络连接在当前会话完成后是否仍然保持打开状态。如果值是 keep-alive，则连接是持久的，不会关闭，允许对同一服务器进行后续请求。
        //在 HTTP/2 和 HTTP/3 中，禁止使用特定于连接的标头字段，如 Connection 和 Keep-Alive。
        //除去标准的逐段传输（hop-by-hop）头（Keep-Alive, Transfer-Encoding, TE, Connection, Trailer, Upgrade (en-US), Proxy-Authorization and Proxy-Authenticate），任何逐段传输头都需要在 Connection 头中列出，这样才能让第一个代理知道必须处理它们且不转发这些头,标准的逐段传输头也可以列出（常见的例子是 Keep-Alive，但这不是必须的）。
        // 'Connection':''

        //允许消息发送者暗示连接的状态，还可以用来设置超时时长和最大请求数。
        // 需要将 The Connection 首部的值设置为 "keep-alive" 这个首部才有意义
        //一系列用逗号隔开的参数，每一个参数由一个标识符和一个值构成，并使用等号 ('=') 隔开。下述标识符是可用的：
        //timeout：指定了一个空闲连接需要保持打开状态的最小时长（以秒为单位）
        //在连接关闭之前，在此连接可以发送的请求的最大值
        // 'Keep-Alive':''


        /* 内容协商 */

        // 告知（服务器）客户端可以处理的内容类型，这种内容类型用MIME 类型来表示
        // 'Accept':''

        //将客户端能够理解的内容编码方式——通常是某种压缩算法——进行通知（给服务端）
        //'Accept-Encoding ':''

        //允许客户端声明它可以理解的自然语言，以及优先选择的区域方言。
        // 'Accept-Language':''

        // 包含一个期望条件，表示服务器只有在满足此期望条件的情况下才能妥善地处理请求。
        //通知接收方客户端要发送一个体积可能很大的消息体，期望收到状态码为100 (Continue) 的临时回复
        //'Expect':'100-continue'

        //用于限制 TRACE 方法可经过的服务器（通常指代理服务器）数目。它的值是一个整数，指定可经过的服务器最大数目
        //如果 TRACE 请求中没有 Max-Forwards 标头，就可以认为，不限制可经过的服务器最大数目。
        //'Max-Forwards':''


        /* cookie */

        //其中含有先前由服务器通过 Set-Cookie 标头投放或通过 JavaScript 的 Document.cookie 方法设置，然后存储到客户端的 HTTP cookie 。
        //Cookie: name=value; name2=value2; name3=value3
        //'Cookie':''


        /* cors */
        //无相关的请求标头


        /* 下载 */

        //指示回复的内容该以何种形式展示，是以内联的形式（即网页或者页面的一部分），还是以附件的形式下载并保存到本地。
        //在 multipart/form-data 类型的应答消息体中，Content-Disposition 通用标头可以被用在 multipart 消息体的子部分中，用来给出其对应字段的相关信息。各个子部分由在 Content-Type 中定义的边界（boundary）分隔。用在消息体自身则无实际意义。
        // 在同源 URL情况下，Chrome 和 Firefox 82 以及更高的版本会优先使用 HTML 的 <a> 元素的 download 属性而不是 Content-Disposition: inline 参数来处理下载。
        //Content-Disposition: attachment; filename="filename.jpg"


        /* 消息主体 */

        //消息主体的大小，即用十进制数字表示的八位元组的数目。
        // 'Content-Length':''

        //指示资源的 MIME 类型 media type 。
        //客户端告诉服务器实际发送的数据类型。
        //Content-Type: text/html; charset=utf-8
        //Content-Type: multipart/form-data; boundary=something
        //'Content-Type':''

        //列出了对当前实体消息（消息荷载）应用的任何编码类型，以及编码的顺序
        //接收者知道需要以何种顺序解码该实体消息才能获得原始荷载格式
        //用于在不丢失原媒体类型内容的情况下压缩消息数据。
        //原始媒体/内容的类型通过 Content-Type 首部给出，而 Content-Encoding 应用于数据的表示，或“编码形式”
        //如果原始媒体以某种方式编码（例如 zip 文件），则该信息不应该被包含在 Content-Encoding 首部内。
        // 'Content-Encoding':''

        //说明访问者希望采用的语言或语言组合，
        // 如果没有指明 Content-Language，那么默认地，文件内容是提供给所有语言的访问者使用的。
        // 多个语言标签也是合法的，同样的，这个首部还可以用来描述不同媒体类型的文件，而不单单局限于文本型文档。
        // 'Content-Language':''


        /* 代理 */

        //包含了代理服务器的客户端的信息，即由于代理服务器在请求路径中的介入而被修改或丢失的信息。
        //按照设计的目的，它会暴露一定的隐私和敏感信息，比如客户端的 IP 地址。所以在应用此消息首部的时候，需要将用户的隐私问题考虑在内。
        // 'Forwarded':''

        //由代理服务器添加的,用来追踪消息转发情况，防止循环请求，以及识别在请求或响应传递链中消息发送者对于协议的支持能力。
        // 'Via':''



        /* 请求上下文  */

        //包含一个电子邮箱地址，这个电子邮箱地址属于发送请求的用户代理的实际掌控者的人类用户。
        //机器人代理程序（比如爬虫,Form 首部应该随请求一起发送,在服务器遇到问题的时候，例如机器人代理发送了过量的请求，站点管理员可联系到你。
        // 'From':''

        //指明了请求将要发送到的服务器主机名和端口号。
        //所有 HTTP/1.1 请求报文中必须包含一个Host头字段。缺少Host头或者含有超过一个Host头的 HTTP/1.1 请求，可能会收到400（Bad Request）
        //服务器的域名（用于虚拟主机）。
        //服务器监听的 TCP 端口号。
        // 'Host':''

        //包含了当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的
        //服务端一般使用 Referer 请求头识别访问来源，可能会以此进行统计分析、日志记录以及缓存优化等。
        // Referer 请求头可能暴露用户的浏览历史，涉及到用户的隐私问题。
        //在以下两种情况下，Referer 不会被发送：
        //来源页面采用的协议为表示本地文件的 "file" 或者 "data" URI；
        //当前请求页面采用的是非安全协议，而来源页面采用的是安全协议（HTTPS）。
        // 'Referer':''

        //包含了一个特征字符串，用来让网络协议的对端来识别发起请求的用户代理软件的应用类型、操作系统、软件开发商以及版本号
        // 'User-Agent':''


        /* 范围请求 */

        // 告知服务器返回文件的哪一部分。在一个 Range 首部中，可以一次性请求多个部分，服务器会以 multipart 文件的形式将其返回。
        //Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
        // 'Range':''

        //当字段值中的条件得到满足时，Range 头字段才会起作用
        //如果字段值中的条件没有得到满足，服务器将会返回 200 OK 状态码，并返回完整的请求资源。
        //If-Range 头字段通常用于断点续传的下载过程中，用来自从上次中断后，确保下载的资源没有发生改变。
        // 'If-Range':''


        /* 传输编码 */

        //用来指定用户代理希望使用的传输编码类型。(可以将其非正式称为 Accept-Transfer-Encoding
        //值得注意的是，支持 HTTP/1.1 协议的接收方一定可以处理 chunked 传输编码请求，所以没有必要一定在 TE 首部指定“chunked”关键字。然而，如果客户端将要接收编码在 chunked 包体里面的"trailer"信息的时候，主动指定该头部将会非常有用
        // 'TE':''

        /* 安全 */

        //用来向服务器端发送信号，表示客户端优先选择加密及带有身份验证的响应,表示它支持 upgrade-insecure-requests 的升级机制：
        //服务器现在可以重定向到这个站点的安全版本。在响应中可以添加一个 Vary 首部，这样的话，响应就不会被缓存服务器提供给不支持升级机制的客户端了。
        // 'Upgrade-Insecure-Requests':''


        /* 其他 */

        //包含了报文创建的日期和时间。
        // 'Date':''

        //HTTP 1.1（仅限）
        //可用于将已建立的客户端/服务器连接升级到不同的协议（通过相同的传输协议）。
        //例如，客户端可以使用它来将连接从 HTTP 1.1 升级到 HTTP 2.0，或者将 HTTP 或 HTTPS 连接升级到 WebSocket。
        //HTTP/2 明确禁止使用此机制/标头；它特定于 HTTP/1.1。
        //Connection: upgrade都必须设置
        //协议按优先级降序排列，以逗号分隔。协议版本可选
        // Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
        //Upgrade: websocket
        // 'Upgrade':''
        
        

    },

    validateStatus: function (status) {
        //定义了对于给定的http状态响应码是解析还是拒绝承诺,如果返回true(0或者设置为nul或者undedined),承诺将被解析否则将被拒绝
        return status >= 200 && status < 300 //default
    },

    withCredentials: false,//default //withCredentials表示使用应该使用凭证进行跨站点访问控制请求
    
    responseEncoding: 'utf8',//default  //指示用于解码响应的编码(仅限于node.js),注意忽略流或者客户端请求的responseType

    xsfrCookieName: 'XSFR-TOKEN',//default //是要用作xsfr令牌值的cookie的名称
    
    xsfrHeaderName: 'X-XSFR-TOKEN',//default //是承载sxfr令牌值的http报头的名称

    decompress: true,//default //指示是否应该自动解压缩响应体,如果设置为true,也会从所有解压缩相应的响应对象中删除content-encoding头,仅限node.js(xhr无法关闭解压缩)

    // responseType: 'blob', // 针对文件内容中文乱码问题,表示服务器将响应的数据类型,arraybuffer,blob,json,text,steam,blob,browser only:blob,default json
    
    // data: {
    //     //data是作为请求体发送的数据仅仅适用于请求方法put,post,delete,patch,当没有设置transformrequest设置时候,;必须是以下类型之一,字符串,plain object,arraybuffer,araybufferview     urlsearchparams,Browser only:formData ,file,blob,Node only:stream,buffer
    //     firstName: 'Fred'
    // },

    // data:'Country=Brasil&City=Belo Horizonte',//将数据发送到主体的替代语法,post方法,只发送值,不发送键

    // params: {
    //     //params是与请求一起发送到URL参数,必须是一个普通对象或者urlsearchparams对象,注意null或者未定义的参数不会出现在url中
    //     ID:12345
    // },

    // paramsSerializer: function (params) {
    //     //是一个可选函数,负责序列化params
    //     return QS.stringify(params,{arrayFormat:'brackets'})
    // },
    
    // maxContentLength: 2000, //定义了Node.js中允许的http响应内容的最大字节数
    
    // maxBodyLength: 2000, //(only node.js)定义了http请求内容的最大字节数

    // maxRedirects: 5,//default //定义了Node.js中要遵循的最大重定向数,如果设置为0,则不会进行重定向
    
    // socketPath: null,//default //定义了在Node.js中使用的unix套接字,sock向docker守护进程发送请求,只能指定socketPath或者Proxy,如果两者都指定,则是有socketPath
    
    // cancelToken: new CancelToken(function (cancel) { }), //指定一个可用于取消请求的取消令牌
    
    //都定义了一个自定义代理,分别在Node.js中执行http和https请求的时候使用,这允许添加像keepalive这样的默认不启用的选项
    // httpAgent: new http.Agent({ keepAlive: true }),
    // httpsAgent: new https.Agent({ keepAlive: true }),

    // proxy: {
        // ' proxy '定义代理服务器的主机名、端口和协议。
        //你也可以使用常规的' http_proxy '和' https_proxy '环境变量定义代理。
        //如果您在代理配置中使用环境变量,还可以定义一个' no_proxy '环境变量作为一个逗号分隔的不应该被代理的域列表。
        //使用' false '禁用代理，忽略环境变量。
        // ' auth '表示应该使用HTTP基本身份验证来连接代理，提供凭据。这将设置一个' Proxy-Authorization '标头，覆盖任何现有的' Proxy-Authorization '自定义标头，你已经使用' headers '设置。
        //如果代理服务器使用HTTPS，那么您必须将协议设置为“HTTPS”。
        // protocol: 'https',
        // host: '127.0.0.1',
        // port: 9000,
        // auth: {
        //     username: 'mikeymike',
        //     password:'rapunz3l'
        // }
    // },

    // transformRequest: [
        // 允许在发送到服务期之前更改请求数据,这只适用于请求方法post,patch,delete,数组中的最厚一个函数必须返回一个字符串buffer,arraybuffer,formdata,stream,你可以修改headers对象
        // function (data, headers) {
        //     return data;
        // }
    // ],

    // transformResponse: [
        // 允许在被传给then/catch之前对响应数据进行更改
        //   function (data) {
        //       return data;
        //   }
    //   ],
    
    // adapter: function (config) {
        //适配器允许自定义处理请求,这使得测试更加容易,返回一个承诺并提供一个有效的响应
    // },

    // auth: {
        //auth表示应该使用Http基本身份验证,并提供凭据,这将设置一个authorization头,覆盖任何一个现有的authorization头,你已经使用headers设置,请注意,通过此参数只能配置基本http基本认证,对于承载令牌等,使用`Authorization`自定义头代替
        // username: 'janedoe',
        // password:'soopers3cret'
    // }
   
    // onUploadProgress: function (progressEvent) {
        //只允许处理上传的进度事件
    // },

    // onDownloadProgress: function (progressEvent) {
        //只允许处理下载的进度事件
    // },
    
}