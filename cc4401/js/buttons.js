function show_commits(project) {
  project = project.replace(/\s+/g, '');
  var project_index = projects_json.semester.indexOf(project);
  var json = json_list[project_index];
  $('#page-wrapper').html('');
  $('#page-wrapper').append('<div class="row"> <div class="col-lg-12"> <h1 class="page-header">Commits - '+project+'</h1> </div></div>');
  for (var i in json) {
    var body = '<div class="row"><div class="col-lg-12"> <div class="panel panel-primary"> <div class="panel-heading">'+json[i].nombre+' ('+json[i].user+')'+ '<div class="pull-right">Total: '+json[i].commits.length+'</div> </div><div class="panel-body"> ';
    for (var j in json[i].commits) {
      body = body+'<p><b>message: '+json[i].commits[j].message+'</b><br>time: '+json[i].commits[j].time+'<br>branch: '+json[i].commits[j].branch+'<br>additions: <span class="text-success">'+json[i].commits[j].additions+'</span><br>deletions: <span class="text-danger">'+json[i].commits[j].deletions+'</span><br>url: <a target="_blank" href="'+json[i].commits[j].url+'">'+json[i].commits[j].url+'</a></p><hr>';
    }
    body = body+'</div></div></div></div>'
    $('#page-wrapper').append(body);
  }
}


function general_view(project) {
  project = project.replace(/\s+/g, '');
  var project_index = projects_json.semester.indexOf(project);
  var json = json_list[project_index];
  $('#page-wrapper').html('');
  $('#page-wrapper').append('<div class="row"> <div class="col-lg-12"> <h1 class="page-header">Review - '+project+'</h1> </div></div>');
  $('#page-wrapper').append('<div id="bar"></div>');
  var datas = [];
  for (var i in json) {
    var usr_name = json[i].nombre.substring(json[i].nombre.indexOf(" ") + 1);
    var d = {user: usr_name, commits: json[i].commits.length, issues: json[i].issues.length, comments: json[i].comments.length};
    datas.push(d);
  }
  Morris.Bar({
    element: 'bar',
    data: datas,
    xkey: 'user',
    ykeys: ['commits', 'issues', 'comments'],
    labels: ['Commits', 'Issues', 'Comments'],
    stacked: true,
    resize:true
  });
}
