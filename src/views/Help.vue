<template>
    <my-page title="帮助" backable>
        <ui-article>
            <h2>工具介绍</h2>
            <p>可以使用本工具对中文进行UrlEncode编码。可以针对不同编码进行处理，<strong>包括gbk、big5、utf8等。</strong></p>
            <p>为了让包含中文的URL可以使用，您可以使用本工具对中文进行UrlEncode编码。</p>
            <p>我们都知道javascript在做表单提交的时候，会遇到很多坑爹的 中文需要转换成gbk encode或者big5 encode的问题，<br>
                中文的 javascript原生的escape只是将中文转换为unicode编码，encodeURI或者encodeURIComponent也是对于中文unicode编码的url再编码，<br>
                而js本身没有特性支持gbk的urlencode，大部分的时候我们是通过后台（java，urlencode.encode(“中文”，”gbk”)）这样来实现的，本工具是使用Javascript实现，这样就可以实现浏览器的完美兼容。
            </p>
        </ui-article>
    </my-page>
</template>
