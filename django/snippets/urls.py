from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from snippets import views
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view


urlpatterns = [
    path('snippets/', views.SnippetList.as_view()),
    path('snippets/<int:pk>/', views.SnippetDetail.as_view()),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
         extra_context={'schema_url': 'openapi-schema'}
         ), name='swagger-ui'),
    path('openapi/', get_schema_view(
         title="Your Project",
         description="API for all things …",
         version="1.0.0"
         ), name='openapi-schema'),
]

urlpatterns = format_suffix_patterns(urlpatterns)
