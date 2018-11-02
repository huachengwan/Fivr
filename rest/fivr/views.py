from django.http import HttpResponse

def show_welcome(request):
    return HttpResponse('Hello!, It\'s server url, you are disallowed to access this')