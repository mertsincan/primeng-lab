import { TemplateSeparatorModule } from '@/components/template/templateseparator';
import { AppConfigService } from '@/service/appconfigservice';
import { Component, inject } from '@angular/core';

@Component({
    standalone: true,
    selector: 'freya-separator',
    imports: [TemplateSeparatorModule],
    template: `
        <template-separator>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="49" viewBox="0 0 48 49" fill="none">
                <path d="M14 12H21.1333V16.5881L34.2105 14V20L21.1333 22.5881V24.5881L34.2105 22V28L21.1333 30.5881V36H14V12Z" [attr.fill]="fillColor" />
            </svg>
        </template-separator>
    `
})
export class FreyaSeparator {
    configService = inject(AppConfigService);

    get fillColor() {
        return this.configService.appState().darkTheme ? 'var(--p-surface-0)' : 'var(--p-surface-900)';
    }
}
