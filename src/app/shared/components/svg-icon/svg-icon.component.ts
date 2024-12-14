import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-svg-icon',
  template: `<div [innerHTML]="svgContent"></div>`,
})
export class SvgIconComponent implements OnInit {
  @Input() name: string = '';
  @Input() customClass: string = '';
  svgContent: SafeHtml | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const path = `svg/${this.name}.svg`;
    this.http.get(path, { responseType: 'text' }).subscribe((svg: string) => {
        const parsedSvg = this.addClassToSvg(svg, this.customClass);
        this.svgContent = this.sanitizer.bypassSecurityTrustHtml(parsedSvg);
      },
      (error) => console.error(`No se pudo cargar el icono "${this.name}" desde ${path}`)
    );
  }

  private addClassToSvg(svg: string, customClass: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svg, 'image/svg+xml');
    const svgElement = doc.querySelector('svg');

    if (svgElement) {
      svgElement.setAttribute(
        'class',
        `${svgElement.getAttribute('class') || ''} ${customClass}`.trim()
      );
    }

    return svgElement ? doc.documentElement.outerHTML : svg;
  }
}