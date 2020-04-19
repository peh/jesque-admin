package grails.plugins.jesque.admin

import grails.plugins.Plugin

class JesqueAdminGrailsPlugin extends Plugin {

    def grailsVersion = "3.0.0 > *"
    def pluginExcludes = [
            "**/jesque/test/**"
    ]

    def title = "Jesque Admin" // Headline display name of the plugin
    def author = "Philipp Eschenbach"
    def authorEmail = "philipp@errbuddy.net"
    def description = '''Admin UI for the Grails Jesque Plugin'''

    def loadAfter = ['jesque']

    def profiles = ['web']

    def documentation = "https://github.com/uberall/jesque-admin"

    // Extra (optional) plugin metadata

    // License: one of 'APACHE', 'GPL2', 'GPL3'
    def license = "APACHE"

    // Details of company behind the plugin (if there is one)
    def organization = [name: "uberall", url: "https://uberall.com/"]

    // Any additional developers beyond the author specified above.
    def developers = [ [ name: "Florian Langenhahn", email: "florian.langenhahn@uberall.com" ]]

    // Location of the plugin's issue tracker.
    def issueManagement = [system: "Github", url: "https://github.com/peh/jesque-admin/issues"]

    // Online location of the plugin's browseable source code.
    def scm = [url: "https://github.com/peh/jesque-admin/issues"]

    void doWithApplicationContext() {
        JesqueAdminJsonMarshaller.init()
    }

}
