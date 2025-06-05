import{_ as a,c as s,o as p,ag as e}from"./chunks/framework.BeMlo_ux.js";const m=JSON.parse('{"title":"命令","description":"","frontmatter":{"title":"命令","date":"2024-04-08T20:28:32.000Z","outline":"deep"},"headers":[],"relativePath":"microsoft/wpf/2024-04-08-icommand.md","filePath":"microsoft/wpf/2024-04-08-icommand.md","lastUpdated":1747924457000}'),l={name:"microsoft/wpf/2024-04-08-icommand.md"};function t(i,n,c,o,d,u){return p(),s("div",null,n[0]||(n[0]=[e(`<h1 id="数据和界面的交互离不开命令-命令离不开事件-一切的跳转一切的数据交换-皆来源于观察者" tabindex="-1">数据和界面的交互离不开命令，命令离不开事件，一切的跳转一切的数据交换，皆来源于观察者 <a class="header-anchor" href="#数据和界面的交互离不开命令-命令离不开事件-一切的跳转一切的数据交换-皆来源于观察者" aria-label="Permalink to &quot;数据和界面的交互离不开命令，命令离不开事件，一切的跳转一切的数据交换，皆来源于观察者&quot;">​</a></h1><h2 id="系统命令" tabindex="-1">系统命令 <a class="header-anchor" href="#系统命令" aria-label="Permalink to &quot;系统命令&quot;">​</a></h2><p>System.Windows.Input.ICommand 连接数据与界面的桥梁<br> System.Windows.Input.RoutedCommand 原始桥梁<br> System.Windows.Input.RoutedUICommand 原始桥梁</p><p>ICommandSource InputBinding CommandBinding</p><h2 id="自定义命令" tabindex="-1">自定义命令 <a class="header-anchor" href="#自定义命令" aria-label="Permalink to &quot;自定义命令&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    public class RelayCommand : ICommand</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        private readonly Action&lt;object&gt; _CanExecute;</span></span>
<span class="line"><span>        private readonly Action _Execute;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public RelayCommand(Action execute)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            _Execute = execute;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public RelayCommand(Action&lt;object&gt; execute)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            _CanExecute = execute;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        public event EventHandler CanExecuteChanged</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            add =&gt; CommandManager.RequerySuggested += value;</span></span>
<span class="line"><span>            remove =&gt; CommandManager.RequerySuggested -= value;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 1.先判断命令是否可以执行(true)</span></span>
<span class="line"><span>        public bool CanExecute(object parameter)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return _CanExecute == null ? (_Execute == null ? false : true) : true;</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        // 2.若可以执行，则执行此方法，反之则跳过此方法</span></span>
<span class="line"><span>        public void Execute(object parameter)</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            if (parameter == null)</span></span>
<span class="line"><span>                _Execute?.Invoke();</span></span>
<span class="line"><span>            else</span></span>
<span class="line"><span>                _CanExecute?.Invoke(parameter);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h2 id="触发器" tabindex="-1">触发器 <a class="header-anchor" href="#触发器" aria-label="Permalink to &quot;触发器&quot;">​</a></h2><p><code>NuGet Package</code> : <code>Microsoft.Xaml.Behaviors.Wpf</code></p><p><code>xmlns:i=&quot;http://schemas.microsoft.com/xaml/behaviors&quot;</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;RadioButton</span></span>
<span class="line"><span>        Height=&quot;60&quot;</span></span>
<span class="line"><span>        Content=&quot;{Binding TaskItem, Mode=TwoWay, UpdateSourceTrigger=PropertyChanged, NotifyOnSourceUpdated=True}&quot;</span></span>
<span class="line"><span>        GroupName=&quot;ctl&quot;</span></span>
<span class="line"><span>        IsChecked=&quot;{Binding IsTab, Mode=TwoWay}&quot;</span></span>
<span class="line"><span>        Style=&quot;{StaticResource MahApps.Styles.RadioButton.Flat}&quot;&gt;</span></span>
<span class="line"><span>        &lt;i:Interaction.Triggers&gt;</span></span>
<span class="line"><span>            &lt;i:EventTrigger EventName=&quot;Checked&quot;&gt;</span></span>
<span class="line"><span>                &lt;i:InvokeCommandAction Command=&quot;{Binding DataContext.CheckedCmd, RelativeSource={RelativeSource Mode=FindAncestor, AncestorType={x:Type ListView}, AncestorLevel=1}}&quot; CommandParameter=&quot;{Binding}&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/i:EventTrigger&gt;</span></span>
<span class="line"><span>        &lt;/i:Interaction.Triggers&gt;</span></span>
<span class="line"><span>    &lt;/RadioButton&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;Button Command=&quot;{Binding AddCmd}&quot; Content=&quot;test&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;TextBlock</span></span>
<span class="line"><span>        Height=&quot;50&quot;</span></span>
<span class="line"><span>        HorizontalAlignment=&quot;Stretch&quot;</span></span>
<span class="line"><span>        Text=&quot;text&quot;&gt;</span></span>
<span class="line"><span>        &lt;i:Interaction.Triggers&gt;</span></span>
<span class="line"><span>            &lt;i:EventTrigger EventName=&quot;MouseDown&quot;&gt;</span></span>
<span class="line"><span>                &lt;i:InvokeCommandAction Command=&quot;{Binding MouseDownCmd}&quot; /&gt;</span></span>
<span class="line"><span>            &lt;/i:EventTrigger&gt;</span></span>
<span class="line"><span>        &lt;/i:Interaction.Triggers&gt;</span></span>
<span class="line"><span>    &lt;/TextBlock&gt;</span></span></code></pre></div><h3 id="快捷键命令" tabindex="-1">快捷键命令 <a class="header-anchor" href="#快捷键命令" aria-label="Permalink to &quot;快捷键命令&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;Window.InputBindings&gt;</span></span>
<span class="line"><span>        &lt;KeyBinding</span></span>
<span class="line"><span>            Key=&quot;T&quot;</span></span>
<span class="line"><span>            Command=&quot;{Binding AltCmd}&quot;</span></span>
<span class="line"><span>            Modifiers=&quot;Alt&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/Window.InputBindings&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    &lt;Window.Resources&gt;</span></span>
<span class="line"><span>        &lt;RoutedUICommand x:Key=&quot;Cut&quot; Text=&quot;剪切&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/Window.Resources&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;Window.CommandBindings&gt;</span></span>
<span class="line"><span>        &lt;CommandBinding</span></span>
<span class="line"><span>            CanExecute=&quot;CommandBinding_CanExecute&quot;</span></span>
<span class="line"><span>            Command=&quot;{StaticResource Cut}&quot;</span></span>
<span class="line"><span>            Executed=&quot;CommandBinding_Cut&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/Window.CommandBindings&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;Window.InputBindings&gt;</span></span>
<span class="line"><span>        &lt;KeyBinding Command=&quot;{StaticResource Cut}&quot; Gesture=&quot;Ctrl+X&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/Window.InputBindings&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private void CommandBinding_Cut(object sender, ExecutedRoutedEventArgs e)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        vm?.CutCmd.Execute(e.Parameter);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //可省略此方法</span></span>
<span class="line"><span>    private void CommandBinding_CanExecute(object sender, CanExecuteRoutedEventArgs e)</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        e.CanExecute = true;</span></span>
<span class="line"><span>    }</span></span></code></pre></div><h3 id="galamvvmlight" tabindex="-1">GalaMVVMlight <a class="header-anchor" href="#galamvvmlight" aria-label="Permalink to &quot;GalaMVVMlight&quot;">​</a></h3><h3 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h3><p>基于自定义命令，分别在触发器和普通命令中的使用</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    # 空参数</span></span>
<span class="line"><span>    private RelayCommand addCmd;</span></span>
<span class="line"><span>    public RelayCommand AddCmd</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        get</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return addCmd ?? (addCmd = new RelayCommand(() =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>            }));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // 带参数</span></span>
<span class="line"><span>    private RelayCommand checkedCmd;</span></span>
<span class="line"><span>    public RelayCommand CheckedCmd</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        get</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return checkedCmd ?? (checkedCmd = new RelayCommand(args =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                var node = args as TaskModel;</span></span>
<span class="line"><span>            }));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }    </span></span>
<span class="line"><span>    //快捷键命令</span></span>
<span class="line"><span>    private RelayCommand altCmd;</span></span>
<span class="line"><span>    public RelayCommand AltCmd</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        get</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return altCmd ?? (altCmd = new RelayCommand(() =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                System.Diagnostics.Debug.WriteLine(&quot;&quot;);</span></span>
<span class="line"><span>            }));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }    </span></span>
<span class="line"><span>    //Cut</span></span>
<span class="line"><span>    private RelayCommand cutCmd;</span></span>
<span class="line"><span>    public RelayCommand CutCmd</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        get</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>            return cutCmd ?? (cutCmd = new RelayCommand(() =&gt;</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>                System.Diagnostics.Debug.WriteLine(&quot;&quot;);</span></span>
<span class="line"><span>            }));</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span></code></pre></div><p>过去面试中也会被问到此问题，还继续被问道 PreviewMouse 和 Mouse 的区别,隧道和冒泡</p><p>隧道 window -&gt; top</p><p>冒泡 top -&gt; window</p>`,20)]))}const g=a(l,[["render",t]]);export{m as __pageData,g as default};
