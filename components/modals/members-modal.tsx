'use client';

import { Check, Copy, RefreshCw, ShieldAlert, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';

import { useModal } from '@/hooks/use-modal-store';
import { useOrigin } from '@/hooks/use-origin';
import { ServerWithMembersWithProfiles } from '@/types';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserAvatar } from '@/components/user-avatar';

const roleIconMap = {
    GUEST: null,
    MODERATOR: <ShieldCheck className="ml-2 h-4 w-4 text-indigo-500" />,
    ADMIN: <ShieldAlert className="ml-2 h-4 w-4 text-rose-500" />,
};

export const MembersModal = () => {
    const { onOpen, isOpen, onClose, type, data } = useModal();

    const isModalOpen = isOpen && type === 'members';
    const { server } = data as { server: ServerWithMembersWithProfiles };

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="overflow-hidden bg-white text-black">
                <DialogHeader className="px-6 pt-8">
                    <DialogTitle className="text-center text-2xl font-bold">
                        Manage Members
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        {server?.members?.length} Members
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="mt-8 max-h-[420px] pr-6">
                    {server?.members?.map(member => (
                        <div
                            key={member.id}
                            className="mb-6 flex items-center gap-x-2"
                        >
                            <UserAvatar src={member.profile.imageUrl} />
                            <div className="flex flex-col gap-y-1">
                                <div className="flex items-center gap-x-1 text-xs font-semibold">
                                    {member.profile.name}
                                    {roleIconMap[member.role]}
                                </div>
                                <p className="text-xs text-zinc-500">
                                    {member.profile.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};
