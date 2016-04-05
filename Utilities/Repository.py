"""
Repository class.
Here the program store the repository from github with all of his information to easily access to it.
"""
import datetime
import Commit
import Issue
__author__ = "Michel Llorens"
__copyright__ = "Copyright 2016"
__license__ = "MIT"
__version__ = "1.0.0"
__email__ = "mllorens@dcc.uchile.cl"


class Repository:
    def __init__(self, repo):
        self.repo = repo
        self.commits = []
        self.issues = []
        self.lastWeek = datetime.datetime.now() - datetime.timedelta(weeks=1)
        self.parse_commits(repo.get_commits(since=self.lastWeek))
        self.parse_issues(repo.get_issues(since=self.lastWeek))

    def parse_commits(self, page_list):
        for c in page_list:
            self.commits.append(Commit.Commit(c))

    def parse_issues(self, page_list):
        for i in page_list:
            self.issues.append(Issue.Issue(i))

    def count_commits(self):
        return len(self.commits)

    def count_issues(self):
        return len(self.issues)
