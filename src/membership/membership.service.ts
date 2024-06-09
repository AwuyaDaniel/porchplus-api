import { Injectable } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Membership } from './entities/membership.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MembershipService {
  constructor(
    @InjectRepository(Membership)
    private membershipRepository: Repository<Membership>,
  ) {}

  create(createMembershipDto: CreateMembershipDto): Promise<Membership> {
    const membership = this.membershipRepository.create(createMembershipDto);
    return this.membershipRepository.save(membership);
  }

  findAll(): Promise<Membership[]> {
    return this.membershipRepository.find();
  }

  findOne(id: number): Promise<Membership> {
    return this.membershipRepository.findOneBy({ id });
  }

  update(id: number, updateMembershipDto: UpdateMembershipDto): Promise<Membership> {
    return this.membershipRepository.save({ ...updateMembershipDto, id });
  }

  async remove(id: number): Promise<void> {
    await this.membershipRepository.delete(id);
  }
}